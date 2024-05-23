/// <reference lib="webworker" />

import { ASSETS, CACHE } from '../names';

/**
 * Handle install event
 */
export const handleInstall = (event: ExtendableEvent) => {
    event.waitUntil(addFilesToCache());
}

/**
 * Create cache and add all assets to it 
 */
// @ts-ignore 
export const addFilesToCache = async (): Promise<void> => {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
}