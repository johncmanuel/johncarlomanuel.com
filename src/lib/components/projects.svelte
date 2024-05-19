<script>
  import Project from "./project.svelte";

  const projects = [
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
      desc: "A website that allows users, specifically university students, to connect with others and socialize. LA Hacks 2021 Submission.",
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

<div class="grid grid-cols-1 md:grid-cols-2 md:gap-11 lg:gap-11 xl:grid-cols-3 xl:gap-11 py-6">
  {#each projects as proj}
    <Project
      projectName={proj.name}
      tags={proj.tags}
      imageUrl={proj.img_url}
      description={proj.desc}
      projectUrl={proj.url}
    />
  {/each}
</div>
<div class="flex flex-col items-center py-10">
  <a
    class="btn btn-ghost mx-auto btn-lg text-lg"
    href="https://github.com/johncmanuel/"
    target="_blank">See more on my GitHub</a
  >
</div>
