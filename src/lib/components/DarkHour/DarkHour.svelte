<script lang="ts">
  export let date: Date = new Date();
  const timezoneIANA = Intl.DateTimeFormat().resolvedOptions().timeZone;
</script>
