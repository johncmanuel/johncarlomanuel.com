<script lang="ts">
  import MetaTags from "$components/SEO/MetaTags.svelte";
  import { page } from "$app/stores";

  interface Dog {
    name: string;
    prefix: string;
    numImages: number;
  }

  interface DogImg {
    src: string;
    alt: string;
  }

  const DOGS_FOLDER = "/assets/dogs";
  const DOGS_IMGS_EXT = "png";

  const DOGS: Dog[] = [
    {
      name: "Blueberry",
      prefix: "bl",
      numImages: 5
    },
    {
      name: "Buster",
      prefix: "bu",
      numImages: 6
    }
  ];

  // NOTE: It would make sense to use something like enhanced-img
  // (https://kit.svelte.dev/docs/images#sveltejs-enhanced-img)
  // to import and load large numbers of images from the static folder. This was
  // the previous solution; however, since the plugin creates
  // multiple versions of an image and the service worker caches
  // each of them, this results in a larger than usual cache (~512 MBs last
  // time I checked). I could rewrite the service worker to prohibit caching those versions,
  // but because the plugin is experimental and the documentation is lacking,
  // the effort to do so is not worth it. Moreover, because the plugin compiles
  // various versions of the images, it results in much higher build time.
  // Thus, I went with a solution that may be much better, as seen in this file, and
  // removes the plugin, lessening the number of dependencies in the project.

  const createDogImgs = (dogs: Dog[]): DogImg[] => {
    return dogs.flatMap(({ prefix, numImages, name }) =>
      Array.from({ length: numImages }, (_, i) => {
        return {
          src: `${DOGS_FOLDER}/${prefix}${i + 1}.${DOGS_IMGS_EXT}`,
          alt: name ?? "An amazing dog :)"
        };
      })
    );
  };

  const dogImgs = createDogImgs(DOGS);
  const currUrl = new URL($page.url).href;
  const desc = "Pictures of my beautiful dogs. :)";
  const title = "The best dogs in the whole world!";
</script>

<MetaTags
  {title}
  titleTemplate="%s | John Carlo Manuel"
  description={desc}
  author="John Carlo Manuel"
  twitter={{
    card: "summary_large_image",
    title: title,
    description: desc,
    image: "/assets/dogs/bl3.png",
    imageAlt: "Blueberry",
    handle: "@johncmanuel"
  }}
  openGraph={{
    title: title,
    description: desc,
    url: currUrl,
    image: "/assets/dogs/bu2.png",
    imageAlt: "Buster"
  }}
/>

<div class="container">
  <h1 class="text-5xl font-bold py-16 text-center">My beautiful dogs: Blueberry and Buster :)</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 px-0 md:px-10">
    {#each dogImgs as dog}
      <img
        src={dog.src}
        alt={dog.alt}
        class="shadow-xl object-scale-down mx-auto h-auto scale-90 md:scale-75 hover:scale-100 w-full md:w-1/2"
      />
    {/each}
  </div>
</div>
