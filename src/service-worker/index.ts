// Implement service worker
// Guides used: 
// https://kit.svelte.dev/docs/service-workers
// https://www.youtube.com/watch?v=kVBJKSU7sw8

/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
// Ignore TS errors in this file: https://stackoverflow.com/a/59631754
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { handleInstall } from "./listeners/install";
import { handleFetch } from "./listeners/fetch";
import { handleActivate } from "./listeners/activate";

var sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener('install', handleInstall);
sw.addEventListener('fetch', handleFetch);
sw.addEventListener('activate', handleActivate);
