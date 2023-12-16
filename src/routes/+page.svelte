<script>
  import Hero from "$lib/components/hero/hero.svelte";
  import Container from "$lib/components/container/container.svelte";
  import Project from "$lib/components/project/project.svelte";
</script>

<div id="about">
  <Hero />
</div>

<Container>
  <div class="divider" />
  <div id="experience">
    <h1 class="text-5xl font-bold">Experience</h1>
  </div>
</Container>

<Container>
  <div class="divider" />
  <div id="projects">
    <h1 class="text-5xl font-bold">Projects</h1>
    <Container>
      <Project
        projectName="hello"
        tags={["nextjs", "svelte"]}
        description="game"
        imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      />
    </Container>
  </div>
</Container>

<div class="divider" />
