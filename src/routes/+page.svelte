<script lang="ts">
  // TODO: 1-2 sentence summary about each experience from resume repo
  // TODO: 1-2 sentence summary + tag for each skill for each project from resume repo
  import MetaTags from "$components/SEO/MetaTags.svelte";
  import { page } from "$app/stores";
  import GitHub from "virtual:icons/fa6-brands/github";
  import LinkedIn from "virtual:icons/fa6-brands/linkedin";
  import Twitter from "virtual:icons/fa6-brands/twitter";
  import Youtube from "virtual:icons/fa6-brands/youtube";
  import Email from "virtual:icons/fa6-solid/envelope";
  import Webring from "$components/Webring/Webring.svelte";
  import Self from "$lib/public/self";
  import Link from "$components/Link/Link.svelte";
  import Links from "$lib/public/links";
  import ThemeToggle from "$components/ThemeToggle/ThemeToggle.svelte";
  import type { PageData } from "./$types";
  import FullMoonTracker from "$components/FullMoonTracker/FullMoonTracker.svelte";
  import Marquee from "$components/Marquee/Marquee.svelte";
  import MarqueeItems from "$lib/public/marquee";

  const currUrl = new URL($page.url).href;
  const date = new Date();

  export let data: PageData;
  const recentPosts = data.recentPosts ?? [];

  const name = "John Carlo Manuel";
  const desc = "my personal website :)";
  const avatar = "/android-chrome-512x512.png";
  const avatarAlt = "picture of John Carlo Manuel";
  const skylineCSCWebring =
    "https://raw.githubusercontent.com/Skyline-College-Computer-Science-Club/clubwebring/master/webring.json";

  const heroImgPath = "/assets/avatar.jpg";

  const resumeUrl = Links["resume"];
  const githubUrl = Links["github"];
  const twitterUrl = Links["twitter"];
  const linkedInUrl = Links["linkedin"];
  const youtubeUrl = Links["youtube"];
  const emailUrl = Links["email"];
  const blogUrl = Links["blog"];

  const personaQuotes = MarqueeItems.persona;
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
      <!-- The hero img doesn't show entirely, where the bottom doesn't completely show 
        if on a Chromium-built browser. But on Firefox, it seems to show perfectly fine.  -->
      <img
        src={heroImgPath}
        class="object-contain max-h-full md:max-h-none max-w-full mx-auto md:mx-0 md:max-w-xs rounded-lg shadow-xl"
        alt="John Carlo Manuel"
        loading="eager"
        fetchpriority="high"
      />
    </div>
    <div class="flex flex-col gap-8 md:gap-5 pt-3 md:pt-0">
      <h1 class="flex flex-row gap-5 md:gap-3 text-2xl text-left">
        john carlo manuel <ThemeToggle />
      </h1>
      <p>
        Software engineer and computer science student at <b
          >California State University, Fullerton</b
        >. I'm interested in <b>full-stack development</b>, <b>game development</b>, and
        <b>distributed systems</b>. Outside of engineering, I enjoy diving into creative endeavors
        such as writing and worldbuilding. I'm also a cool gamer that mainly plays (MMO)RPGs and
        narrative-driven games.
      </p>
      <div class="flex gap-3">
        <a href={githubUrl} target="_blank" aria-label="GitHub">
          <GitHub />
        </a>
        <a href={linkedInUrl} target="_blank" aria-label="LinkedIn">
          <LinkedIn />
        </a>
        <a href={twitterUrl} target="_blank" aria-label="Twitter">
          <Twitter />
        </a>
        <a href={youtubeUrl} target="_blank" aria-label="YouTube">
          <Youtube />
        </a>
        <a href={emailUrl} target="_blank" aria-label="Email">
          <Email />
        </a>
      </div>
      <div class="flex flex-col gap-6 md:gap-3">
        <h2 class="text-2xl">Resume</h2>
        <div class="flex gap-3 flex-row">
          <Link
            href={resumeUrl}
            aClass={"flex flex-row gap-1"}
            additionalText={"PDF"}
            additionalTextClass={"self-center"}
            allowSubdomain={true}
          />

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
    <Marquee items={personaQuotes} />
    <!-- <div id="experience" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">experience</h1>
      </div>
    </div>
  -->
    <div id="fullmoontracker" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">full moon tracker</h1>
        <FullMoonTracker {date} />
      </div>
    </div>
    <div id="skills" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">skills</h1>
        <div
          class="flex items-start flex-col md:flex-row flex-wrap justify-start gap-3 md:gap-2 px-4"
        >
          {#each Self.skills as skill}
            <span
              class="flex bg-blue-4 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-grey-1"
            >
              <span class="dark:opacity-75">{skill}</span>
            </span>
          {/each}
        </div>
      </div>
    </div>
    <div id="projects" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">featured projects</h1>
        <ul class="flex items-start flex-col justify-center gap-8 px-4">
          {#each Self.projects as project}
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
                    class="flex bg-blue-4 dark:bg-grey-1 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
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
    <div id="coursework" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-2xl">relevant coursework</h1>
        <ul
          class="flex flex-wrap items-start flex-col justify-start gap-2 md:gap-3 px-4 dark:opacity-75"
        >
          {#each Self.coursework as course}
            <li class="flex flex-nowrap">• {course}</li>
          {/each}
        </ul>
      </div>
    </div>
    <div id="registers" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
        <h1 class="text-xl">recent registers</h1>
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
              additionalText={"view my blog to view them!"}
              allowSubdomain={true}
            />
          </h2>
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
