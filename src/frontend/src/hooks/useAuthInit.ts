/**
 * useAuthInit — Permanent auth initialization hook.
 *
 * PURPOSE: After every login (or on app startup if already logged in),
 * call registerUser() so the backend always has this principal in its
 * userRoles map. Without this, isCallerAdmin() traps on upgrade because
 * the caller is not in the map.
 *
 * This hook must be called exactly once, at the top of AppRoutes.
 */
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1200;

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export function useAuthInit() {
  const { identity } = useInternetIdentity();
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();

  // Track which principal we last initialized so we don't double-call
  const lastInitializedPrincipal = useRef<string | null>(null);
  const isInitializing = useRef(false);

  const principalId = identity?.getPrincipal().toString() ?? null;

  const invalidateAuthQueries = useCallback(
    (principal: string | null) => {
      queryClient.invalidateQueries({ queryKey: ["isAdmin"] });
      queryClient.invalidateQueries({ queryKey: ["role"] });
      queryClient.invalidateQueries({
        queryKey: ["isAdmin", principal],
      });
      queryClient.invalidateQueries({
        queryKey: ["userRole", principal],
      });
    },
    [queryClient],
  );

  const runRegisterUser = useCallback(async () => {
    if (!actor || !principalId) return;
    if (isInitializing.current) return;
    if (lastInitializedPrincipal.current === principalId) return;

    isInitializing.current = true;

    let attempt = 0;
    while (attempt < MAX_RETRIES) {
      try {
        // registerUser() is idempotent — no-op if already registered
        await (
          actor as unknown as Record<string, () => Promise<void>>
        ).registerUser();
        break; // success — stop retrying
      } catch {
        attempt++;
        if (attempt < MAX_RETRIES) {
          await sleep(RETRY_DELAY_MS);
        }
        // After all retries, silently give up — user still gets guest role
        // but won't crash. Admin role check will return false (not throw).
      }
    }

    lastInitializedPrincipal.current = principalId;
    isInitializing.current = false;

    // Invalidate ALL admin/role queries so Navbar and AppRoutes refetch fresh data
    invalidateAuthQueries(principalId);
  }, [actor, principalId, invalidateAuthQueries]);

  // Run on mount (for already-logged-in users) AND whenever identity changes
  useEffect(() => {
    if (!identity || !actor || isFetching) return;
    // Reset tracker when principal changes (logout → login with different account)
    if (lastInitializedPrincipal.current !== principalId) {
      runRegisterUser();
    }
  }, [identity, actor, isFetching, principalId, runRegisterUser]);

  // When user logs OUT, clear the tracker and invalidate queries
  useEffect(() => {
    if (!identity) {
      lastInitializedPrincipal.current = null;
      isInitializing.current = false;
      invalidateAuthQueries(null);
    }
  }, [identity, invalidateAuthQueries]);

  return { runRegisterUser };
}
