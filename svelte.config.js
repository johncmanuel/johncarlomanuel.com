// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess()],

  kit: {
    // For Cloudflare adapters, see https://kit.svelte.dev/docs/adapter-cloudflare
    adapter: adapter(),
    alias: {
      $components: "src/lib/components"
    }
  }
};

export default config;
