<script lang="ts">
  import {
    isFullMoon,
    HIGHER_THRESHOLD_DAYS,
    LOWER_THRESHOLD_DAYS,
    FULL_MOON_EMOJI,
    getLunarAge,
    getLunarAgePercent,
  } from "./lunar";
  import { onMount } from "svelte";

  const NOT_FULL_MOON_EMOJI = "❌";

  export let date: Date = new Date();
  let _isFullMoon = isFullMoon(date);
  let lunarAge = getLunarAge(date);
  let lunarAgePercent = getLunarAgePercent(date);

  const updateDate = () => {
    date = new Date();
    _isFullMoon = isFullMoon(date);
    lunarAge = getLunarAge(date);
    lunarAgePercent = getLunarAgePercent(date);
  };

  // Set timeout to be at least 10 ms to be on the safe side.
  // https://stackoverflow.com/a/7648619
  const TIMEOUT_MS = 10;

  let interval: number | undefined;
  onMount(() => {
    interval = setInterval(updateDate, TIMEOUT_MS);
    return () => clearInterval(interval);
  });
</script>

<div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
  {#if _isFullMoon}
    <p>{FULL_MOON_EMOJI} it's full moon again, crazy how time flies.</p>
  {:else}
    <p>{NOT_FULL_MOON_EMOJI} it's not a full moon, yet.</p>
  {/if}
  <h2 class="text-xl">stats</h2>
  <ul class="px-4">
    <li>date: {date.toISOString()} (UTC)</li>
    <li>
      lunarAge: {lunarAge}
    </li>
    <li>lunarAgePercent: {lunarAgePercent}</li>
    <li>isFullMoon: {_isFullMoon}</li>
    <li>
      fullmoon range: between {LOWER_THRESHOLD_DAYS} and {HIGHER_THRESHOLD_DAYS}
    </li>
  </ul>
</div>
