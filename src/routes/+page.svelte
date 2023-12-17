<script>
  import Hero from "$lib/components/hero.svelte";
  import Project from "$lib/components/project.svelte";
  import Timeline from "$lib/components/timeline.svelte";
</script>

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
      <h1 class="text-5xl font-bold pb-10 text-center lg:text-left">Projects</h1>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-11 lg:gap-11 xl:grid-cols-3 xl:gap-11">
          <Project
            projectName="hello"
            tags={["nextjs", "svelte"]}
            description="game"
            imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
          <Project
            projectName="hello"
            tags={["nextjs", "svelte"]}
            description="game"
            imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
          <Project
            projectName="hello"
            tags={["nextjs", "svelte"]}
            description="game"
            imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
          <Project
            projectName="hello"
            tags={["nextjs", "svelte"]}
            description="game"
            imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
          <Project
            projectName="hello"
            tags={["nextjs", "svelte"]}
            description="game"
            imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </div>
      </div>
    </div>
    <div class="divider divider-primary" />
  </div>
  <div class="container">
    <div id="education">
      <h1 class="text-5xl font-bold pb-10 text-center lg:text-left">Education</h1>
    </div>
  </div>
  <div class="divider divider-primary" />
</div>
