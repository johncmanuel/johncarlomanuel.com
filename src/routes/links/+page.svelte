<script lang="ts">
  import Links from "$lib/public/links";
  import NewWindow from "$components/Icons/NewWindow.svelte";
  import JumpHome from "$components/JumpHome/JumpHome.svelte";
  import { GitHub, LinkedIn, Email, X } from "$components/Icons/SocialMedia";

  const mainLinks: [string, string][] = [
    ["Blog", Links["blog"]],
    ["Resume", Links["resume"]],
    ["YouTube", Links["youtube"]],
    ["FartLabs", Links["fartlabs"]]
  ];

  const socialLinks = [
    { icon: GitHub, url: Links["github"], label: "GitHub" },
    { icon: LinkedIn, url: Links["linkedin"], label: "LinkedIn" },
    { icon: X, url: Links["x"], label: "X" },
    // { icon: Youtube, url: Links["youtube"], label: "YouTube" },
    { icon: Email, url: Links["email"], label: "Email" }
  ];
</script>

<div class="flex flex-col items-center min-h-screen py-10 px-4 bg-white dark:bg-blue-4">
  <img
    src="/assets/avatar.jpg"
    alt="Profile pic"
    class="w-28 h-28 rounded-full object-cover mb-6 border-4 border-blue-2 dark:border-blue-3 shadow-lg"
    loading="lazy"
  />
  <h1 class="text-4xl font-bold mb-4 text-center text-blue-2 dark:text-blue-3">
    John Carlo Manuel
  </h1>
  <div class="flex flex-row gap-4 mb-8">
    {#each socialLinks as { icon, url, label }}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        class="text-blue-2 dark:text-blue-3 hover:text-blue-1 dark:hover:text-blue-1 transition-colors"
      >
        <svelte:component this={icon} class="w-8 h-8" />
      </a>
    {/each}
  </div>
  <div class="flex flex-col gap-4 w-full max-w-md">
    {#each mainLinks as [route, link]}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg px-6 py-4 bg-blue-1/90 dark:bg-blue-2/80 text-white dark:text-blue-3 font-semibold text-lg shadow hover:scale-105 transition-transform duration-150 flex items-center justify-between group"
      >
        <span>{route}</span>
        <NewWindow customClass="w-5 h-5 ml-2 opacity-70 group-hover:opacity-100" />
      </a>
    {/each}
  </div>
  <JumpHome />
</div>
