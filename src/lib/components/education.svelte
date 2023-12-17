<script>
  const coursework = ["Software Engineering", "Database Systems", "Algorithms & Data Structures"];
  const colleges = [
    {
      name: "California State University, Fullerton",
      timestamp: "",
      gpa: 0,
      degree: "B.S Computer Science",
      url: ""
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="p-4">
    <h2 class="text-2xl">California State University, Fullerton</h2>
    <h2 class="text-2xl">Skyline College</h2>
  </div>
  <div class="p-4">
    <h2 class="text-2xl">Relevant Coursework</h2>
    <ul class="text-md pt-6 list-disc px-4 lg:px-6 max-w-lg">
      {#each coursework as cw}
        <li>{cw}</li>
      {/each}
    </ul>
  </div>
</div>
