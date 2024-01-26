<script lang="ts">
  // const imagePaths = Object.keys(
  //   import.meta.glob("$lib/assets/dogs/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}", {
  //     eager: true
  //   })
  // );

  // TODO: find a better way to get all images in a folder that works in
  // production (the above solution doesn't work)
  const imagePaths = [
    "src/lib/assets/dogs/bl1.png",
    "src/lib/assets/dogs/bl2.png",
    "src/lib/assets/dogs/bl3.png",
    "src/lib/assets/dogs/bl4.png",
    "src/lib/assets/dogs/bl5.png",
    "src/lib/assets/dogs/bu1.png",
    "src/lib/assets/dogs/bu2.png",
    "src/lib/assets/dogs/bu3.png",
    "src/lib/assets/dogs/bu4.png",
    "src/lib/assets/dogs/bu5.png",
    "src/lib/assets/dogs/bu6.png"
  ];

  const images = imagePaths.map((path) => {
    const alt = path.includes("bu") ? "Buster" : "Blueberry";
    return { path, alt };
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
