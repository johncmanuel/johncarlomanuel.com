<script lang="ts">
  import { page } from "$app/stores";
  import Game from "$lib/game/404Game.svelte";
  import { onMount } from "svelte";
  import Link from "$components/Link/Link.svelte";
  import ErrorLogos from "$lib/public/errors";

  $: isDesktop = false;

  // Using TailwindCSS's default breakpoint for medium-sized devices
  // https://tailwindcss.com/docs/responsive-design
  const minWidthPixels = 768;

  // Mainly using Sawaratsuki's logos, so give credits.
  const sawaratsuki = "SWARATSUKI";
  const sawaratsukiLink = "https://github.com/SAWARATSUKI/";
  const sawaratsukiLogoRepo = "KawaiiLogos";

  const errorLogoSrc = ErrorLogos[$page.status] ?? ErrorLogos[404];

  onMount(() => {
    isDesktop = window.innerWidth >= minWidthPixels;
  });
</script>

<svelte:head>
  <title>{$page.status || 404} / John Carlo Manuel</title>
</svelte:head>

<section
  id="errorpage"
  class="flex flex-col justify-center gap-8 md:gap-4 items-center w-screen h-screen md:pb-20"
>
  <img
    src={errorLogoSrc}
    class="flex max-w-md md:max-w-4xl pb-10 drop-shadow-2xl"
    alt={`Vtuber ${$page.status} logo`}
    title={$page.error?.message}
  />
  <div class="flex flex-col gap-6 md:gap-8 text-lg items-center">
    <span class="flex flex-row">
      Logo credits:&nbsp
      <Link
        href={sawaratsukiLink}
        additionalText={sawaratsuki}
        aClass={"flex flex-row gap-1 flex-wrap hover:underline"}
        additionalTextClass={"text-lg"}
        omitHref={true}
      />
    </span>
    <span class="flex flex-row">
      Logo source:&nbsp
      <Link
        href={`${sawaratsukiLink}${sawaratsukiLogoRepo}/`}
        additionalText={sawaratsukiLogoRepo}
        aClass={"flex flex-row gap-1 flex-wrap hover:underline"}
        additionalTextClass={"text-lg"}
        omitHref={true}
      />
    </span>

    <!-- no need to use Link component for this -->
    <a href="/" aria-label="Button to go back to homepage"
      >Click me to go back home!</a
    >
  </div>
</section>

{#if isDesktop}
  <Game />
{/if}
