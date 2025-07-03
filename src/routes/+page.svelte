<script lang="ts">
  import MetaTags from "$components/SEO/MetaTags.svelte";
  import { page } from "$app/stores";
  import { GitHub, LinkedIn, Email, Twitter, Youtube } from "$components/Icons/SocialMedia";
  import Webring from "$components/Webring/Webring.svelte";
  import Link from "$components/Link/Link.svelte";
  import Links from "$lib/public/links";
  import ThemeToggle from "$components/ThemeToggle/ThemeToggle.svelte";
  import type { PageData } from "./$types";
  import FullMoonTracker from "$components/FullMoonTracker/FullMoonTracker.svelte";
  import Marquee from "$components/Marquee/Marquee.svelte";
  import MarqueeItems from "$lib/public/marquee";
  import Skills from "$components/Homepage/Skills.svelte";
  import Projects from "$components/Homepage/Projects.svelte";
  import Posts from "$components/Homepage/Posts.svelte";
  import FartLabs from "$components/Homepage/FartLabs.svelte";
  import Books from "$components/Homepage/Books.svelte";
  import Footer from "$components/Footer/Footer.svelte";

  const currUrl = new URL($page.url).href;
  const date = new Date();

  export let data: PageData;
  const recentPosts = data.recentPosts ?? [];
  const skills = data.skills ?? [];
  const projects = data.projects ?? [];
  const books = data.books ?? [];
  const webrings = data.webring ?? [];

  const name = "John Carlo Manuel";
  const desc = "my personal website :)";
  const avatar = "/android-chrome-512x512.png";
  const avatarAlt = "picture of John Carlo Manuel";

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
    <div class="mx-auto overflow-clip aspect-square w-full">
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
        >. I'm interested in <b>full-stack development</b>,
        <b>game development</b>, and
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
    <Skills {skills} />
    <Projects {projects} {githubUrl} />
    <Posts {recentPosts} {blogUrl} />
    <FartLabs />
    <Books {books} />
    <div id="webring" class="flex flex-col gap-4 max-w-full px-4">
      <div class="flex gap-4 max-w-full overflow-hidden px-4 flex-col">
        <Webring {webrings} />
      </div>
    </div>
    <Footer {date} />
  </div>
</div>
