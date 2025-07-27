<script lang="ts">
  import Link from "$components/Link/Link.svelte";
  export let fartLabsUrl: string = "https://fartlabs.org";
  export let fartLabsDiscordUrl: string = "https://go.fart.tools/chat";
</script>

<div id="fartlabs" class="flex flex-col gap-4 max-w-full px-4">
  <div class="flex gap-6 md:gap-4 max-w-full overflow-hidden md:px-4 flex-col">
    <h2 class="text-2xl">FartLabs</h2>
    <p class="px-4 md:px-0 dark:opacity-75">
      Interested in working on some cool software for TypeScript developers through open source?
      Join our community!
    </p>
    <div class="flex flex-col gap-6 md:gap-1 px-4 md:px-0">
      <Link
        href={fartLabsUrl}
        aClass={"flex flex-row flex-wrap gap-1"}
        additionalText={"Click me to read more!"}
        additionalTextClass={"text-lg font-bold"}
        omitHref={false}
      />
      <Link
        href={fartLabsDiscordUrl}
        aClass={"flex flex-row flex-wrap gap-1"}
        additionalText={"Join our Discord server!"}
        additionalTextClass={"text-lg font-bold"}
        omitHref={false}
      />
    </div>
  </div>
</div>
