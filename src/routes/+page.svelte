<script lang="ts">
  // TODO: 1-2 sentence summary about each experience from resume repo
  // TODO: 1-2 sentence summary + tag for each skill for each project from resume repo
  import MetaTags from "$components/SEO/MetaTags.svelte";
  import { page } from "$app/stores";
  import Link from "$components/Icons/Link.svelte";
  import GitHub from "virtual:icons/fa6-brands/github";
  import LinkedIn from "virtual:icons/fa6-brands/linkedin";
  import Twitter from "virtual:icons/fa6-brands/twitter";
  import Youtube from "virtual:icons/fa6-brands/youtube";
  import Email from "virtual:icons/fa6-solid/envelope";
  import Webring from "$components/Webring/Webring.svelte";
  import Self from "$lib/public/self";
  import Links from "$lib/public/links";
  import type { PageData } from "./$types";

  const currUrl = new URL($page.url).href;

  export let data: PageData;
  const recentPosts = data.recentPosts ?? [];

  const name = "John Carlo Manuel";
  const desc = "my personal website :)";
  const avatar = "/android-chrome-512x512.png";
  const avatarAlt = "picture of John Carlo Manuel";
  const skylineCSCWebring =
    "https://raw.githubusercontent.com/Skyline-College-Computer-Science-Club/clubwebring/master/webring.json";

  // TODO: add this stuff to the resume repo and import it from there
  const projects = [
    {
      name: "bettercs",
      url: "https://github.com/johncmanuel/bettercs",
      desc: "A gamified web application designed to help CS students learn concepts through highly interactive activities for typical weed-out classes such as Data Structures and Computer Organization. FullyHacks 2024.",
      tags: ["nextjs", "typescript", "react", "educational"]
    },
    {
      name: "isabot",
      url: "https://github.com/johncmanuel/isabot",
      desc: "A Discord interactions and webhook bot for AR Club, a World of Warcraft guild in US-Shandris/Bronzebeard.",
      tags: ["python", "fastapi", "GCP"]
    },
    {
      name: "RateMyLoo",
      url: "https://github.com/johncmanuel/RateMyLoo",
      desc: "A web application for users who want to share pictures of their bathrooms and rate others.",
      img_url: "/assets/projects/ratemyloo.webp",
      tags: ["react", "firebase", "typescript", "nextjs", "tailwindcss", "playwright"]
    },
    {
      name: "discordbot",
      url: "https://github.com/johncmanuel/discordbot",
      desc: "A customizable, dynamic Discord bot in Python that supports multple features.",
      img_url: "/assets/projects/discordbot.webp",
      tags: ["python", "firebase", "discord.py"]
    },
    {
      name: "UniPals",
      url: "https://github.com/johncmanuel/UniPals",
      desc: "A website that allows users, specifically university students, to connect with others and socialize. LA Hacks 2021.",
      img_url: "/assets/projects/unipals.webp",
      tags: ["react", "django", "semantic-ui"]
    },
    {
      name: "Xplora",
      url: "https://github.com/johncmanuel/Xplora",
      desc: "A remote-controlled and autonomous car designed for exploring unknown and risky environments. Part of the 2022 Winter Scholars Program at Skyline College.",
      img_url: "/assets/projects/xplora.webp",
      tags: ["arduino", "c++", "robotics"]
    },
    {
      name: "20 Years",
      url: "https://www.amazon.com/dp/B08JRJ1YV6",
      desc: "A fantasy, adventure novel written and published in 2020.",
      img_url: "/assets/projects/20yrs.webp",
      tags: ["writing"]
    }
  ];
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
  <div class="flex flex-col gap-12 md:gap-10">
    <!-- <div id="experience" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">experience</h1>
      </div>
    </div>
  -->
    <div id="skills" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">skills</h1>
        <div
          class="flex items-start flex-col md:flex-row flex-wrap justify-start gap-3 md:gap-2 px-4 opacity-75"
        >
          {#each Self.skills as skill}
            <span
              class="flex bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
            >
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </div>
    <div id="projects" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">featured projects</h1>
        <ul class="flex items-start flex-col justify-center gap-8 px-4 opacity-75">
          {#each projects as project}
            <li class="flex flex-col gap-2 md:gap-1">
              <a
                href={project.url}
                target="_blank"
                class="flex flex-row flex-wrap gap-0.5 hover:underline"
              >
                <span class="text-xl md:text-base">{project.name}</span>
                <Link />
              </a>
              <p class="text-balance">{project.desc}</p>
              <div class="flex flex-row gap-1 flex-wrap">
                <!-- <span class="text-base">skills:</span> -->
                {#each project.tags as tag}
                  <span
                    class="flex bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    >{tag}</span
                  >
                {/each}
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div id="coursework" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">relevant coursework</h1>
        <ul
          class="flex flex-wrap items-start flex-col justify-start gap-2 md:gap-3 px-4 opacity-75"
        >
          {#each Self.coursework as course}
            <li class="flex flex-nowrap">• {course}</li>
          {/each}
        </ul>
      </div>
    </div>
    <div id="registers" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">recent registers</h1>
        {#if recentPosts.length !== 0}
          <div class="flex items-start flex-col justify-center gap-5 px-4 opacity-75">
            {#each recentPosts as post}
              <article class="flex flex-col gap-1">
                <a
                  href={post.link}
                  target="_blank"
                  class="flex flex-row flex-wrap gap-1 hover:underline"
                >
                  <span class="text-xl">{post.title}</span>
                  <Link />
                </a>
                <p>{post.description}</p>
                <p class="text-sm">{post.pubDate}</p>
              </article>
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
        {:else}
          <div class="flex items-start flex-col justify-center gap-5 px-4 opacity-75">
            <span class="text-lg">unable to fetch the latest registers... :(</span>
          </div>
        {/if}
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
