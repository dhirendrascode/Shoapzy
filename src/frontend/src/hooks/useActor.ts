import { useActor as useActorBase } from "@caffeineai/core-infrastructure";
import { createActor } from "../backend";

type ActorInstance = ReturnType<typeof createActor>;

let _actor: ActorInstance | null = null;
let _isFetching = false;

// Wrap the infrastructure useActor with the app's createActor bound in
export function useActor(): {
  actor: ActorInstance | null;
  isFetching: boolean;
} {
  const result = useActorBase(
    createActor as Parameters<typeof useActorBase>[0],
  );
  return result as { actor: ActorInstance | null; isFetching: boolean };
}
