<script>
  import Hero from "$lib/components/hero.svelte";
  import Timeline from "$lib/components/timeline.svelte";
  import Projects from "$lib/components/projects.svelte";
  import Education from "$lib/components/education.svelte";
</script>

<svelte:head>
  <title>John Carlo Manuel</title>
</svelte:head>

<div id="about">
  <Hero />
</div>

<div class="container">
  <div class="container">
    <div class="divider divider-primary" />
    <div id="experience" class="container">
      <h1 class="text-5xl font-bold pb-10 text-center lg:text-left">Experience</h1>
      <Timeline />
    </div>
    <div class="divider divider-primary" />
  </div>
  <div class="container">
    <div id="projects">
      <h1 class="text-5xl font-bold pb-10 text-center lg:text-left">Featured Projects</h1>
      <Projects />
    </div>
    <div class="divider divider-primary" />
  </div>
  <div class="container">
    <div id="education">
      <h1 class="text-5xl font-bold pb-10 text-center lg:text-left">Education</h1>
      <Education />
    </div>
  </div>
  <div class="divider divider-primary" />
</div>
