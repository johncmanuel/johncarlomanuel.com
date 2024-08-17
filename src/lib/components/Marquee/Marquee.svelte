<script lang="ts">
  // Guide used: https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/
  export let items: string[] = [];
</script>

<div class="relative flex whitespace-no-wrap overflow-x-hidden text-sm">
  <div class="pt-4 animate-marquee whitespace-nowrap">
    {#each items as item}
      <span class="mx-1">{item}</span>
    {/each}
  </div>

  <div class="absolute pt-4 animate-marquee2 whitespace-nowrap">
    {#each items as item}
      <span class="mx-1">{item}</span>
    {/each}
  </div>
</div>
