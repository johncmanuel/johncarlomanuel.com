<script lang="ts">
  import Hero from "$components/Hero/Hero.svelte";
  // import Timeline from "$lib/components/timeline.svelte";
  import Projects from "$components/Project/Projects.svelte";
  import Education from "$components/Education/Education.svelte";
  import MetaTags from "$components/SEO/MetaTags.svelte";
  import { page } from "$app/stores";

  const currUrl = new URL($page.url).href;

  const name = "John Carlo Manuel";
  const desc = "my personal website :)";
  const avatar = "/android-chrome-512x512.png";
  const avatarAlt = "picture of John Carlo Manuel";
</script>

<MetaTags
  title={name}
  titleTemplate="%s | John Carlo Manuel"
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

<div id="about">
  <Hero />
</div>

<div class="container">
  <!-- <div class="container">
    <div class="divider divider-primary px-4 md:px-10" />
    <div id="experience" class="container">
      <h1 class="text-5xl font-bold pb-16 text-center">Experience</h1>
      <Timeline />
    </div>
  </div> -->
  <div class="container" id="projects">
    <div class="divider divider-primary px-4 md:px-10" />
    <h1 class="text-5xl font-bold pb-16 text-center">Featured Projects</h1>
    <Projects />
  </div>
  <div class="container" id="education">
    <div class="divider divider-primary px-4 md:px-10" />
    <h1 class="text-5xl font-bold pb-16 text-center">Education</h1>
    <Education />
  </div>
  <div class="divider divider-primary px-4 md:px-10" />
</div>
