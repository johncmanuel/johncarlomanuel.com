<script lang="ts">
  // source for theme toggle:
  // https://dev.to/willkre/persistent-theme-switch-dark-mode-with-svelte-sveltekit-tailwind-1b9g
  import { browser } from "$app/environment";
  import { getMoonPhaseEmoji } from "$components/FullMoonTracker/lunar";
  import { onMount } from "svelte";

  let darkMode = true;
  const theme = "color-theme";
  const dark = "dark";
  let date = new Date();
  let moonEmoji = getMoonPhaseEmoji(date);

  const handleSwitchDarkMode = () => {
    darkMode = !darkMode;

    localStorage.setItem(theme, darkMode ? dark : "light");

    darkMode
      ? document.documentElement.classList.add(dark)
      : document.documentElement.classList.remove(dark);
    console.log(document.documentElement.classList);
  };

  if (browser) {
    const isAlreadyDark =
      localStorage.getItem(theme) === dark ||
      (!(theme in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isAlreadyDark) {
      document.documentElement.classList.add(dark);
      darkMode = true;
    } else {
      document.documentElement.classList.remove(dark);
      darkMode = false;
    }
    console.log(document.documentElement.classList);
  }

  // Set timeout to be at least 10 ms to be on the safe side.
  // https://stackoverflow.com/a/7648619
  const TIMEOUT_MS = 10;

  let interval: number | undefined;

  onMount(() => {
    interval = setInterval(() => {
      // Update moon emoji every interval
      date = new Date();
      moonEmoji = getMoonPhaseEmoji();
    }, TIMEOUT_MS);
    return () => clearInterval(interval);
  });
</script>

<div class="flex self-center">
  <input
    checked={darkMode}
    on:click={handleSwitchDarkMode}
    type="checkbox"
    id="theme-toggle"
    class="hidden"
  />
  <label for="theme-toggle">
    <span
      class="absolute transition-opacity duration-300 ease-in-out"
      class:opacity-0={darkMode}
      class:opacity-100={!darkMode}
    >
      ☀️
    </span>
    <span
      class="transition-opacity duration-300 ease-in-out"
      class:opacity-0={!darkMode}
      class:opacity-100={darkMode}
    >
      {moonEmoji}
    </span>
  </label>
</div>
