<script lang="ts">
  // See https://www.youtube.com/watch?v=HVxFcRSHj5s
  // for more info on SvelteKit's enhancedimg package.
  // This basically helps with image optimization

  // Vite be complaining a lot about using this method to import from
  // /static. But it still works.
  const images = import.meta.glob("/static/assets/dogs/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}", {
    query: {
      enhanced: true,
      eager: true
    }
  });
  const imagePaths = Object.keys(images);

  const getImagePath = async (path: string) => {
    // @ts-ignore
    const { default: imagePath } = await images[path]();
    const alt = path.includes("bu") ? "Buster" : "Blueberry";
    return { src: imagePath, alt };
  };
</script>

<div class="container">
  <h1 class="text-5xl font-bold py-16 text-center">My beautiful dogs: Blueberry and Buster :)</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 px-0 md:px-10">
    {#each imagePaths as path}
      {#await getImagePath(path) then imagePath}
        <enhanced:img
          src={imagePath.src}
          alt={imagePath.alt}
          class="shadow-xl object-scale-down mx-auto h-auto scale-90 md:scale-75 hover:scale-100 w-full md:w-1/2"
        />
      {/await}
    {/each}
  </div>
</div>
