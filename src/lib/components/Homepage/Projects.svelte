<script lang="ts">
  import Link from "$components/Link/Link.svelte";
  export let projects: any[] = [];
  export let githubUrl: string = "";
</script>

<div id="projects" class="flex flex-col gap-4 max-w-full px-4">
  <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
    <h1 class="text-2xl">featured projects</h1>
    <ul class="flex items-start flex-col justify-center gap-8 px-4">
      {#each projects as project}
        <li class="flex flex-col gap-2 md:gap-1">
          <Link
            href={project.url}
            additionalText={project.name}
            aClass={"flex flex-row flex-wrap gap-1"}
            additionalTextClass={"text-lg md:text-base font-bold"}
          />
          <p class="text-balance dark:opacity-75">{project.desc}</p>
          <div class="flex flex-row gap-1 flex-wrap">
            {#each project.tags as tag}
              <span
                class="flex bg-yellow-1 dark:bg-grey-1 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                ><span class="opacity-75">{tag}</span></span
              >
            {/each}
          </div>
        </li>
      {/each}
    </ul>
    <Link
      href={githubUrl}
      aClass={"flex gap-1 py-4 md:py-0"}
      additionalText={"view more of my projects"}
      allowSubdomain={true}
    />
  </div>
</div>
