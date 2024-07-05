<script lang="ts">
  import MetaTags from "$components/SEO/MetaTags.svelte";
  import { page } from "$app/stores";

  import Link from "$components/Icons/Link.svelte";

  import GitHub from "virtual:icons/fa6-brands/github";
  import LinkedIn from "virtual:icons/fa6-brands/linkedin";
  import Twitter from "virtual:icons/fa6-brands/twitter";
  import Youtube from "virtual:icons/fa6-brands/youtube";
  import Email from "virtual:icons/fa6-solid/envelope";

  import Webring from "$components/Webring/Webring.svelte";

  const currUrl = new URL($page.url).href;

  import type { PageData } from "./$types";
  export let data: PageData;
  // @ts-ignore: TODO - create type in future
  const recentPosts = data.recentPosts;

  const name = "John Carlo Manuel";
  const desc = "my personal website :)";
  const avatar = "/android-chrome-512x512.png";
  const avatarAlt = "picture of John Carlo Manuel";
  const skylineCSCWebring =
    "https://raw.githubusercontent.com/Skyline-College-Computer-Science-Club/clubwebring/master/webring.json";
</script>

<MetaTags
  title={name}
  description={desc}
  author={name}
  twitter={{
    card: "summary_large_image",
    title: name,
    description: desc,
    image: avatar,
    imageAlt: avatarAlt,
    handle: "@johncmanuel"
  }}
  openGraph={{
    title: name,
    description: desc,
    url: currUrl,
    image: avatar,
    imageAlt: avatarAlt
  }}
/>

<div class="flex gap-10 md:gap-4 py-10 flex-col w-full max-w-[60rem] min-h-screen mx-auto">
  <div class="flex gap-4 max-w-full overflow-hidden px-4 flex-col sm:flex-row">
    <div class="mx-auto overflow-clip aspect-square max-w-full w-full h-full">
      <img
        src="/assets/avatar.webp"
        class="object-contain md:object-scale-down md:max-w-sm rounded-lg shadow-2xl"
        alt="John Carlo Manuel"
        loading="eager"
        fetchpriority="high"
      />
    </div>
    <div class="flex flex-col gap-8 md:gap-5">
      <h1 class="text-2xl md:text-left text-center">john carlo manuel</h1>
      <p>
        Software engineer and computer science student at California State University, Fullerton.
        I'm interested in full-stack development, game development, and distributed systems. Outside
        of engineering, I enjoy diving into creative endeavors such as writing and worldbuilding.
        I'm also a cool gamer that mainly plays (MMO)RPGs and narrative-driven games.
      </p>
      <div class="flex gap-3">
        <a href="https://github.com/johncmanuel/" target="_blank" aria-label="GitHub">
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/johncarlomanuel/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </a>
        <a href="https://twitter.com/johncmanuel" target="_blank" aria-label="Twitter">
          <Twitter />
        </a>
        <a href="https://www.youtube.com/@johncarlomanuel" target="_blank" aria-label="YouTube">
          <Youtube />
        </a>
        <a href="mailto:me@johncarlomanuel.com" target="_blank" aria-label="Email">
          <Email />
        </a>
      </div>
      <div class="flex flex-col gap-6 md:gap-3">
        <h2 class="text-2xl">Resume</h2>
        <div class="flex gap-3 flex-row">
          <a
            class="flex flex-row gap-1 hover:underline"
            target="_blank"
            href="https://drive.google.com/file/d/1-mMm_LY_4rdwsDWA0RjQl2ZYDdKTMq-q/view?usp=sharing"
          >
            <Link />
            <span>PDF</span>
          </a>
          <!-- show json version of resume here -->
          <!-- <a
            class="hover:underline"
            target="_blank"
            href="https://drive.google.com/file/d/1-mMm_LY_4rdwsDWA0RjQl2ZYDdKTMq-q/view?usp=sharing"
            >JSON</a
          > -->
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-12 md:gap-6">
    <div id="experience" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <!-- TODO: 1-2 sentence summary about each experience -->
        <h1 class="text-2xl">experience</h1>
      </div>
    </div>
    <div id="projects" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <!-- TODO: 1-2 sentence summary + tag for each skill for each project  -->
        <h1 class="text-2xl">featured projects</h1>
      </div>
    </div>
    <div id="registers" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">recent registers</h1>
        <div class="flex items-start flex-col justify-center gap-5 px-4 opacity-75">
          {#each recentPosts as post}
            <div class="flex flex-col gap-1">
              <a
                href={post.link}
                target="_blank"
                class="flex flex-col md:flex-row gap-1 hover:underline"
              >
                <span class="text-xl">{post.title}</span>
                <Link />
              </a>
              <p>{post.description}</p>
              <p class="text-sm">{post.pubDate}</p>
            </div>
          {/each}
        </div>
        <h2>
          <a
            href="https://registers.johncarlomanuel.com"
            target="_blank"
            class="flex gap-0.5 hover:underline"
          >
            <span>view more</span>
            <Link />
          </a>
        </h2>
      </div>
    </div>
    <div id="webring" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden px-4 flex-col">
        <Webring src={skylineCSCWebring} />
      </div>
    </div>
    <div id="footer" class="flex flex-col gap-4 max-w-full px-4">
      <aside class="mx-auto">
        <p class="text-center">
          Copyright © {new Date().getFullYear()} John Carlo Manuel - All rights reserved.
        </p>
      </aside>
    </div>
  </div>
</div>
