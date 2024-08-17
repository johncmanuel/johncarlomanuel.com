<script lang="ts">
  // Guide used: https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/
  export let items: string[] = [];
</script>

<div class="relative flex pt-4 whitespace-no-wrap overflow-x-hidden text-sm">
  <div class="animate-marquee whitespace-nowrap bg-yellow-1 dark:bg-grey-1">
    {#each items as item}
      <span class="mx-1">{item}</span>
    {/each}
  </div>

  <div class="absolute animate-marquee2 whitespace-nowrap bg-yellow-1 dark:bg-grey-1">
    {#each items as item}
      <span class="mx-1">{item}</span>
    {/each}
  </div>
</div>
