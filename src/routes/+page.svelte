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
    <div class="divider divider-primary px-4 lg:px-0" />
    <div id="experience" class="container">
      <h1 class="text-5xl font-bold pb-10 text-center lg:text-left">Experience</h1>
      <Timeline />
    </div>
  </div>
  <div class="container" id="projects">
    <div class="divider divider-primary px-4 lg:px-0" />
    <h1 class="text-5xl font-bold pb-10 text-center lg:text-left">Featured Projects</h1>
    <Projects />
  </div>
  <div class="container" id="education">
    <div class="divider divider-primary px-4 lg:px-0" />
    <h1 class="text-5xl font-bold pb-10 text-center lg:text-left">Education</h1>
    <Education />
  </div>
  <div class="divider divider-primary px-4 lg:px-0" />
</div>
