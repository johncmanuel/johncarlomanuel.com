<script lang="ts">
  const imagePaths = Object.keys(import.meta.glob("$lib/assets/dogs/*.{JPG,jpg,png,PNG}"));
  const images = imagePaths.map((path) => {
    const alt = path.includes("bu") ? "Buster" : "Blueberry";
    return { path, alt: alt };
  });
</script>

<div class="container">
  <h1 class="text-5xl font-bold py-16 text-center">My beautiful dogs: Blueberry and Buster :)</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 px-0 md:px-10">
    {#each images as image}
      <img
        src={image.path}
        alt={image.alt}
        class="shadow-xl object-scale-down mx-auto h-auto scale-90 md:scale-75 hover:scale-100 w-full md:w-1/2"
      />
    {/each}
  </div>
</div>
