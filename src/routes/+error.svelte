<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>{$page.status || 404} / John Carlo Manuel</title>
</svelte:head>

<section title={$page.error?.message}>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold pb-10 text-center lg:pb-20">
          {$page.status} - {$page.error?.message}
        </h1>
        <img
          src="/assets/chopper.gif"
          class="scale-100 pb-10 lg:scale-125 lg:pb-20"
          alt="Chopper dancing"
        />
        <h2 class="text-4xl font-bold pb-10 text-center lg:pb-15">Go home?</h2>
        <div class="join gap-16 lg:gap-8">
          <a class="btn btn-primary btn-lg" aria-label="Button to go home" href="/">Yes</a>
          <a class="btn btn-primary btn-lg" aria-label="Button to go home" href="/">YES</a>
        </div>
      </div>
    </div>
  </div>
</section>
