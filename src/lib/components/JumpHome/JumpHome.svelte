<script lang="ts">
  export let customClass: string =
    "mt-10 text-blue-2 dark:text-blue-3 hover:text-blue-1 dark:hover:text-blue-1 transition-colors";
  export let customMessage: string = "Click me to go back home!";
</script>

<a href="/" class={customClass} aria-label="Button to go back to homepage">
  {customMessage}
</a>
