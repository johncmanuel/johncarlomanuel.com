<script lang="ts">
  export let skills: string[] = [];
</script>

<div id="skills" class="flex flex-col gap-4 max-w-full px-4">
  <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
    <h1 class="text-2xl">skills</h1>
    <div class="flex items-start flex-col md:flex-row flex-wrap justify-start gap-3 md:gap-2 px-4">
      {#each skills as skill}
        <span
          class="flex bg-yellow-1 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-grey-1"
        >
          <span class="dark:opacity-75">{skill}</span>
        </span>
      {/each}
    </div>
  </div>
</div>
