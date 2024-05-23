/// <reference lib="webworker" />

import { CACHE, ASSETS } from "../names";

/**
 * Handles the fetch event
 */
export const handleFetch = (event: FetchEvent): void => {
    // Ignore other requests except GET and other protected routes
    if (event.request.method !== 'GET') return;

    // @ts-ignore
    event.respondWith(respond(event));
}

export const respond = async (event: FetchEvent): Promise<Response | undefined> => {
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);

    if (ASSETS.includes(url.pathname)) {
        return cache.match(event.request);
    }

    try {
        const response = await fetch(event.request);
        if (response.status === 200) {
            cache.put(event.request, response.clone());
        }
        return response;
    } catch {
        return cache.match(event.request);
    }
} 