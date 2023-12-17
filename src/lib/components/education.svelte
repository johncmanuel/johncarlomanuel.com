<script>
  const coursework = ["Software Engineering", "Database Systems", "Algorithms & Data Structures"];
  const colleges = [
    {
      name: "California State University, Fullerton",
      graduation_date: "May 2026",
      degree: "B.S Computer Science",
      url: "https://www.fullerton.edu/"
    },
    {
      name: "Skyline College",
      graduation_date: "May 2023",
      degree: "Transfer",
      url: "https://www.skylinecollege.edu/"
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <ul class="p-4">
    {#each colleges as college}
      <li class="pb-10">
        <a href={college.url}>
          <h2 class="text-2xl">{college.name}</h2>
        </a>
        <h3 class="text-lg">{college.degree}</h3>
        <time class="italic font-mono">{college.graduation_date}</time>
      </li>
    {/each}
  </ul>
  <div class="p-4">
    <h2 class="text-2xl">Relevant Coursework</h2>
    <ul class="text-md pt-6 list-disc px-4 lg:px-6 max-w-lg">
      {#each coursework as cw}
        <li>{cw}</li>
      {/each}
    </ul>
  </div>
</div>
