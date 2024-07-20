/// <reference lib="webworker" />

import { CACHE } from "../names";

/**
 * Handles the activate event
 */
export const handleActivate = (event: ExtendableEvent) => {
  event.waitUntil(deleteOldCaches());
};

// @ts-ignore
export const deleteOldCaches = async (): Promise<void> => {
  for (const key of await caches.keys()) {
    if (key !== CACHE) await caches.delete(key);
  }
};
