<script lang="ts">
  import { onMount } from "svelte";
  onMount(async () => {
    // @ts-ignore: TS complains about not being able to find a declaration
    // file, but it still works!
    await import("libwebring/dist/webring-element.js");
    await import("libwebring/dist/webring.css");
  });

  export let name = "john";
  export let src: string | null = null;

  $: _src = src ?? undefined;

  $: console.log(_src);
</script>

{#if _src}
  <webring-element {name} src={_src} />
{/if}
