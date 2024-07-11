<script lang="ts">
  import NewWindow from "$components/Icons/NewWindow.svelte";

  export let href: string | URL = "";
  export let aClass: string | null = null;
  export let additionalTextClass: string | null = null;
  export let allowSubdomain: boolean | null = false;
  export let additionalText: string | null = null;
  export let omitIcon: boolean | null = false;
  // prevents href from being shown
  export let omitHref: boolean | null = false;

  const _aClass = aClass ?? "";
  const _additionalTextClass = additionalTextClass ?? "";
  const _allowSubdomain = allowSubdomain ?? false;
  const _additionalText = additionalText ?? undefined;
  const _omitIcon = omitIcon ?? false;
  const _omitHref = omitHref ?? false;

  try {
    new URL(href);
  } catch (err) {
    console.log("invalid url for:", href);
  }

  href = new URL(href);
  const hostname = href.hostname;

  // Return only domain name and extension
  const urlWithoutSubdomains = (url: string) => {
    const parts = url.split(".");
    if (parts.length > 2) {
      return parts.slice(parts.length - 2).join(".");
    }
    return url;
  };

  // leave as undefined if omitted, else get url with or without subdomains
  const url = _omitHref ? undefined : _allowSubdomain ? hostname : urlWithoutSubdomains(hostname);
</script>

<!-- note to self: if wanted to reverse items without them starting on other
 side, use justify-content: flex-end or justify-end for tailwind
 https://stackoverflow.com/a/54462796
 -->
<a href={href.toString()} target="_blank" class={_aClass} aria-label={hostname}>
  {#if _additionalText}
    <span class={_additionalTextClass}>
      {_additionalText}
    </span>
    {#if url}
      <span class="text-sm self-center">({url})</span>
    {/if}
    {#if !_omitIcon}
      <NewWindow />
    {/if}
  {:else}
    {#if url}
      <span class="text-sm self-center">({url})</span>
    {/if}
    {#if !_omitIcon}
      <NewWindow />
    {/if}
  {/if}
</a>
