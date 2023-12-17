<script lang="ts">
  import CheckIcon from "./checkIcon.svelte";

  export let bulletPoints: string[] = ["bullet point"];
  export let timestamp = "timestamp";
  export let company = "company";
  export let jobTitle = "job title";
</script>

<li>
  <hr />
  <div class="timeline-middle">
    <CheckIcon />
  </div>
  <div class="timeline-end mb-4 lg:mb-10 max-w-md lg:max-w-2xl">
    <div class="text-lg font-black">{jobTitle} | {company}</div>
    <time class="font-mono italic mb-2">{timestamp}</time>
    <!-- <div class="text-lg font-bold py-4">{jobTitle}</div> -->
    <ul class="text-md pt-6 list-disc px-4 lg:px-6 max-w-lg">
      {#each bulletPoints as point}
        <li>
          {point}
        </li>
        <br />
      {/each}
    </ul>
  </div>
  <hr />
</li>
