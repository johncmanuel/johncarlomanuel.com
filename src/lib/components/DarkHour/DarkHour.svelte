<script lang="ts">
  // NOTE: Requires the user to be in dark mode for them to see the
  // effect in action

  // https://stackoverflow.com/a/69961228
  import { onMount } from "svelte";

  export let date: Date = new Date();

  const timezoneIANA = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const defaultLocale = "en-US";
  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: timezoneIANA,
    hour12: false,
    hour: "2-digit"
  };
  let dateWithTZ = date.toLocaleTimeString(defaultLocale, dateOptions);

  const parseTimeStr = (timeStr: string): number | null => {
    const hours = parseInt(timeStr);
    if (isNaN(hours) || hours < 0 || hours > 23) {
      return null;
    }
    return hours;
  };

  let currHours = parseTimeStr(dateWithTZ);
  let isDarkHour = currHours != null ? currHours >= 0 && currHours < 1 : false;
  // dark hour colors
  // bright green: #48ff03
  // dark green: #275721
  // black with green hue: #070803
  // finish gradient: dark -> bright
  const checkIfDarkHour = () => {
    date = new Date();
    dateWithTZ = date.toLocaleTimeString(defaultLocale, dateOptions);

    currHours = parseTimeStr(dateWithTZ);
    if (currHours != null) {
      isDarkHour = currHours >= 0 && currHours < 1;
    }
  };

  // Set timeout to be at least 10 ms to be on the safe side.
  // https://stackoverflow.com/a/7648619
  const TIMEOUT_MS = 10;

  let interval: number | undefined;

  onMount(() => {
    interval = setInterval(checkIfDarkHour, TIMEOUT_MS);
    return () => clearInterval(interval);
  });
</script>

<!-- TODO: add dark hour effects to background -->
<main class="bg-blue-1 text-blue-4 dark:bg-blue-4 dark:text-blue-3">
  <slot />
</main>
