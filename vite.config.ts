import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      scale: 2.5,
      compiler: "svelte"
    }),
    enhancedImages()
  ]
});
