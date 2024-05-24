<script lang="ts">
  import type { MetaTags } from "$lib/types/metatags";

  export let title: MetaTags["title"] = undefined;
  export let titleTemplate: MetaTags["titleTemplate"] = undefined;
  export let description: MetaTags["description"] = undefined;
  export let keywords: MetaTags["keywords"] = undefined;
  export let author: MetaTags["author"] = undefined;
  export let twitter: MetaTags["twitter"] = undefined;
  export let openGraph: MetaTags["openGraph"] = undefined;
</script>

<svelte:head>
  {#if title}
    {#if titleTemplate}
      <title>{titleTemplate.replace("%s", title)}</title>
    {:else}
      <title>{title}</title>
    {/if}
  {/if}
  {#if description}
    <meta name="description" content={description} />
  {/if}
  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}
  {#if author}
    <meta name="author" content={author} />
  {/if}
  {#if twitter}
    {#if twitter.card}
      <meta name="twitter:card" content={twitter.card} />
    {/if}
    {#if twitter.title}
      <meta name="twitter:title" content={twitter.title} />
    {/if}
    {#if twitter.description}
      <meta name="twitter:description" content={twitter.description} />
    {/if}
    {#if twitter.image}
      <meta name="twitter:image" content={twitter.image} />
    {/if}
    {#if twitter.imageAlt}
      <meta name="twitter:image:alt" content={twitter.imageAlt} />
    {/if}
    {#if twitter.handle}
      <meta name="twitter:site" content={twitter.handle} />
    {/if}
  {/if}
  {#if openGraph}
    {#if openGraph.title}
      <meta property="og:title" content={openGraph.title} />
    {/if}
    {#if openGraph.description}
      <meta property="og:description" content={openGraph.description} />
    {/if}
    {#if openGraph.url}
      <meta property="og:url" content={openGraph.url} />
    {/if}
    {#if openGraph.image}
      <meta property="og:image" content={openGraph.image} />
    {/if}
    {#if openGraph.imageAlt}
      <meta property="og:image:alt" content={openGraph.imageAlt} />
    {/if}
  {/if}
</svelte:head>
