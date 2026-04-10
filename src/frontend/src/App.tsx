import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Suspense, lazy, useEffect, useRef } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useActor } from "./hooks/useActor";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import AdminDashboard from "./pages/AdminDashboard";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import ProductDetail from "./pages/ProductDetail";
import SellerDashboard from "./pages/SellerDashboard";
import SellerProfile from "./pages/SellerProfile";
import SellerRegister from "./pages/SellerRegister";
import SetupAdmin from "./pages/SetupAdmin";
import Wishlist from "./pages/Wishlist";

// Batch 5 pages — lazy loaded
const SavedAddresses = lazy(() => import("./pages/SavedAddresses"));
const Compare = lazy(() => import("./pages/Compare"));
const Referral = lazy(() => import("./pages/Referral"));

const REGISTER_RETRY_DELAY_MS = 1200;

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function PageLoader() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center"
      style={{ background: "#f1f3f6" }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

function AppRoutes() {
  const { identity } = useInternetIdentity();
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const isLoggedIn = !!identity;
  const principalId = identity?.getPrincipal().toString();

  // Track which principal we last registered to avoid redundant calls
  const registeredPrincipal = useRef<string | null>(null);
  const isRegistering = useRef(false);

  // CRITICAL FIX: Call registerUser() after every login and on app startup.
  // This ensures the backend userRoles map always has this principal registered.
  // Without this, isCallerAdmin() traps after canister upgrades.
  useEffect(() => {
    if (!actor || !identity || !principalId || isFetching) return;
    if (registeredPrincipal.current === principalId) return;
    if (isRegistering.current) return;

    isRegistering.current = true;

    const doRegister = async () => {
      let attempt = 0;
      const maxAttempts = 3;

      while (attempt < maxAttempts) {
        try {
          await (
            actor as unknown as Record<string, () => Promise<void>>
          ).registerUser();
          registeredPrincipal.current = principalId;
          break;
        } catch {
          attempt++;
          if (attempt < maxAttempts) {
            await sleep(REGISTER_RETRY_DELAY_MS);
          }
        }
      }

      isRegistering.current = false;

      // After registration attempt, invalidate and refetch admin status
      // so Navbar shows Admin Dashboard link immediately
      await queryClient.invalidateQueries({ queryKey: ["isAdmin"] });
      await queryClient.invalidateQueries({ queryKey: ["role"] });
      setTimeout(() => {
        queryClient.refetchQueries({
          queryKey: ["isAdmin", principalId],
          exact: true,
        });
      }, 300);
    };

    doRegister();
  }, [actor, identity, principalId, isFetching, queryClient]);

  // When user logs out, reset the tracker and clear auth query cache
  useEffect(() => {
    if (!identity) {
      registeredPrincipal.current = null;
      isRegistering.current = false;
      queryClient.invalidateQueries({ queryKey: ["isAdmin"] });
      queryClient.invalidateQueries({ queryKey: ["role"] });
    }
  }, [identity, queryClient]);

  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin", principalId],
    queryFn: async () => {
      try {
        return await actor!.isCallerAdmin();
      } catch {
        // Caller not yet registered or canister unreachable — never crash
        return false;
      }
    },
    enabled: !!actor && isLoggedIn,
    staleTime: 0, // never use stale admin status
    refetchOnMount: true,
    refetchOnWindowFocus: true, // re-check when tab gains focus
    retry: 3,
    retryDelay: 1000,
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
          />
          <Route
            path="/checkout"
            element={isLoggedIn ? <Checkout /> : <Navigate to="/login" />}
          />
          <Route
            path="/orders"
            element={isLoggedIn ? <Orders /> : <Navigate to="/login" />}
          />
          <Route
            path="/wishlist"
            element={isLoggedIn ? <Wishlist /> : <Navigate to="/login" />}
          />
          <Route
            path="/seller/register"
            element={isLoggedIn ? <SellerRegister /> : <Navigate to="/login" />}
          />
          <Route
            path="/seller/dashboard"
            element={
              isLoggedIn ? <SellerDashboard /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin"
            element={
              isLoggedIn && isAdmin === true ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/setup-admin" element={<SetupAdmin />} />
          <Route path="/seller/:principalId" element={<SellerProfile />} />

          {/* Batch 5 routes */}
          <Route
            path="/saved-addresses"
            element={
              isLoggedIn ? (
                <Suspense fallback={<PageLoader />}>
                  <SavedAddresses />
                </Suspense>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/compare"
            element={
              <Suspense fallback={<PageLoader />}>
                <Compare />
              </Suspense>
            }
          />
          <Route
            path="/referral"
            element={
              isLoggedIn ? (
                <Suspense fallback={<PageLoader />}>
                  <Referral />
                </Suspense>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
