<script lang="ts">
  // source for theme toggle:
  // https://dev.to/willkre/persistent-theme-switch-dark-mode-with-svelte-sveltekit-tailwind-1b9g
  import { browser } from "$app/environment";

  let darkMode = true;
  const theme = "color-theme";
  const dark = "dark";

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
      (!(theme in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isAlreadyDark) {
      document.documentElement.classList.add(dark);
      darkMode = true;
    } else {
      document.documentElement.classList.remove(dark);
      darkMode = false;
    }
    console.log(document.documentElement.classList);
  }
</script>

<div class="flex self-center">
  <input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
  <label for="theme-toggle" />
</div>

<style lang="postcss">
  #theme-toggle {
    @apply invisible;
  }

  #theme-toggle + label {
    @apply cursor-pointer h-9 w-9 rounded-full duration-300 content-[''];
  }

  #theme-toggle:not(:checked) + label {
    @apply bg-amber-300;
  }

  #theme-toggle:checked + label {
    @apply bg-transparent;
    box-shadow: inset -13px -10px 1px 1px #d6ff7d;
  }
</style>
