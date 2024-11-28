<script lang="ts">
  import Links from "$lib/public/links";
  // Might render the links as a scrollable table in the future, too lazy to do it now
</script>

<div
  class="flex gap-10 md:gap-4 py-10 px-5 md:px-0 flex-col w-full max-w-fit min-h-screen mx-auto"
>
  <h1 class="text-4xl font-bold text-center md:text-left">Links</h1>
  <ul class="flex flex-col gap-5 md:gap-3">
    {#each Object.entries(Links) as [route, link]}
      <li>
        {route}: <a href={link} target="_blank" class="underline">{link}</a>
      </li>
    {/each}
  </ul>
  <a href="/" class="py-4 md:py-10" aria-label="Button to go back to homepage"
    >Click me to go back home!</a
  >
</div>
