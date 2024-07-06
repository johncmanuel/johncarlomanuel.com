<script lang="ts">
  import NewWindow from "$components/Icons/NewWindow.svelte";

  export let href: string | URL = "";
  export let aClass: string | null = null;
  export let additionalTextClass: string | null = null;
  export let allowSubdomain: boolean | null = null;
  export let additionalText: string | null = null;

  $: _aClass = aClass ?? "";
  $: _additionalTextClass = additionalTextClass ?? "";
  $: _allowSubdomain = allowSubdomain ?? false;
  $: _additionalText = additionalText ?? undefined;

  try {
    new URL(href);
  } catch (err) {
    console.log("invalid url for:", href);
  }

  href = new URL(href);
  const hostname = href.hostname;
  const url = _allowSubdomain ? hostname : hostname.substring(hostname.indexOf(".") + 1);
</script>

<a href={href.toString()} target="_blank" class={_aClass}>
  {#if _additionalText}
    <NewWindow />
    <span class={_additionalTextClass}>
      {_additionalText}
    </span>
    <span class="text-sm self-center">({url})</span>
  {:else}
    <span>({url})</span>
    <NewWindow />
  {/if}
</a>
