<script lang="ts">
  import { onMount } from "svelte";
  onMount(async () => {
    // @ts-ignore: TS complains about not being able to find a declaration
    // file, but it still works!
    await import("libwebring/dist/webring-element.js");
    await import("libwebring/dist/webring.css");
  });

  const webringUrl =
    "https://raw.githubusercontent.com/Skyline-College-Computer-Science-Club/clubwebring/master/webring.json";
</script>

<webring-element name="john" src={webringUrl} />
