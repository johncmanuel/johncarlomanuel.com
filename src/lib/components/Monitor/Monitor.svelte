<script lang="ts">
  import { env } from "$env/dynamic/public";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  type MonitorData = {
    ts: number;
    kp: number;
    lc: number;
    rc: number;
    mc: number;
  };

  const mockData: MonitorData = {
    ts: Math.floor(Date.now() / 1000),
    kp: 12300,
    lc: 678,
    rc: 1200000,
    mc: 3000000000
  };

  const monitorData = writable<MonitorData | null>(null);
  const loading = writable(true);
  const error = writable<string | null>(null);

  function formatNumber(n: number): string {
    // i doubt it'll reach a trillion in my lifetime (unless...), so
    // keep these formats
    if (n >= 1e12) return (n / 1e12).toFixed(2) + "t";
    if (n >= 1e9) return (n / 1e9).toFixed(2) + "b";
    if (n >= 1e6) return (n / 1e6).toFixed(2) + "m";
    if (n >= 1e3) return (n / 1e3).toFixed(2) + "k";
    return n.toString();
  }

  onMount(async () => {
    loading.set(true);
    error.set(null);
    try {
      if (env.PUBLIC_NODE_ENV === "development") {
        monitorData.set(mockData);
      } else {
        const res = await fetch("https://monitor.johncarlomanuel.com/data");
        if (!res.ok) {
          throw new Error(`Error fetching monitor data: ${res.status} ${res.statusText}`);
        }
        const data: MonitorData = await res.json();
        monitorData.set(data);
      }
    } catch (err: any) {
      error.set(err.message);
    } finally {
      loading.set(false);
    }
  });
</script>

<div id="activity" class="flex flex-col gap-4 max-w-full px-4">
  <div class="flex gap-6 md:gap-4 max-w-full overflow-hidden md:px-4 flex-col">
    <h2 class="text-2xl">activity</h2>
    {#if $loading}
      <div class="text-blue-2 dark:text-blue-3">Loading...</div>
    {:else if $error}
      <div class="text-red-600 dark:text-red-400">{$error}</div>
    {:else if $monitorData}
      <div class="grid grid-cols-2 md:grid-cols-4 px-4 gap-4 text-lg justify-center items-center">
        <div>
          <span>keypresses:</span>
          <span>{formatNumber($monitorData.kp)}</span>
        </div>
        <div>
          <span>left clicks:</span>
          <span>{formatNumber($monitorData.lc)}</span>
        </div>
        <div>
          <span>right clicks:</span>
          <span>{formatNumber($monitorData.rc)}</span>
        </div>
        <div>
          <span>middle clicks:</span>
          <span>{formatNumber($monitorData.mc)}</span>
        </div>
      </div>
      {#if env.PUBLIC_NODE_ENV === "development"}
        <div class="mt-2 text-xs text-yellow-400 text-center">
          Note: this is mock data for development purposes
        </div>
      {/if}
    {/if}
  </div>
</div>
