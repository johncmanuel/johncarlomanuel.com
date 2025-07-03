<script lang="ts">
  import Link from "$components/Link/Link.svelte";
  export let recentPosts: any[] = [];
  export let blogUrl: string = "";
</script>

<div id="registers" class="flex flex-col gap-4 max-w-full px-4">
  <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
    <h1 class="text-2xl">recent registers (blog posts)</h1>
    {#if recentPosts.length !== 0}
      <div class="flex items-start flex-col justify-center gap-5 px-4 dark:opacity-75">
        {#each recentPosts as post}
          <article class="flex flex-col gap-1">
            <Link
              href={post.link}
              aClass={"flex flex-row flex-wrap gap-1"}
              additionalText={post.title}
              additionalTextClass={"text-lg font-bold"}
              omitHref={true}
            />
            <p>{post.description}</p>
            <p class="text-sm">{post.pubDate}</p>
          </article>
        {/each}
      </div>
      <h2>
        <Link
          href={blogUrl}
          aClass={"flex gap-1 py-4 md:py-0"}
          additionalText={"view more"}
          allowSubdomain={true}
        />
      </h2>
    {:else}
      <div class="flex items-start flex-col justify-center gap-5 px-4 opacity-75">
        <span class="text-lg">unable to fetch the latest registers... :(</span>
      </div>
      <h2>
        <Link
          href={blogUrl}
          aClass={"flex gap-1 py-4 md:py-0"}
          additionalText={"view my blog to read them!"}
          allowSubdomain={true}
        />
      </h2>
    {/if}
  </div>
</div>
