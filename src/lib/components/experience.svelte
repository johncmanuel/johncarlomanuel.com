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
  <div class="timeline-end mb-10">
    <div class="text-lg font-black">{jobTitle} | {company}</div>
    <time class="font-mono italic mb-2">{timestamp}</time>
    <!-- <div class="text-lg font-bold py-4">{jobTitle}</div> -->
    <div class="text-md pt-6">
      {#each bulletPoints as point}
        • {point}
        <br />
      {/each}
    </div>
  </div>
  <hr />
</li>
