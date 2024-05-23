// https://kit.svelte.dev/docs/service-workers

import { build, files, version } from '$service-worker';

export const CACHE = `johncarlomanuel.com-cache-${version}`;
export const ASSETS = [
	...build, // the app itself
	...files  // everything in `static`
];