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
</script>

{#if _src}
  <webring-element {name} src={_src} class="py-4">
    <section class="webring flex flex-col center space-y-6">
      <div class="flex justify-center items-center">
        <div class="ring text-center text-lg" />
        <!-- debating whether to keep the src link or not... -->
        <a class="ml-2 link link-hover text-lg text-center" href={_src} target="_blank">(src)</a>
      </div>
      <div class="grid grid-cols-3 gap-24">
        <a
          class="left link link-hover text-left text-base place-self-start before:content-['←']"
          target="_blank"
          href={"#"}>a</a
        >
        <span class="middle text-center text-base place-self-center" />
        <a
          class="right link link-hover text-right text-base place-self-end after:content-['→']"
          target="_blank"
          href={"#"}>a</a
        >
      </div>
    </section>
  </webring-element>
{/if}
