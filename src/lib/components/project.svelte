<script lang="ts">
  export let projectName = "N/A";
  export let tags: string[] = ["N/A", "N/A"];
  export let description = "N/A";
  export let imageUrl = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";
  export let projectUrl = "https://github.com/";
</script>

<a href={projectUrl}>
  <div
    class="card w-96 bg-base-100 shadow-xl object-contain md:object-scale-down mx-auto scale-75 lg:scale-100"
  >
    <figure>
      <img src={imageUrl} alt={projectName} />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {projectName}
      </h2>
      <p>{description}</p>
      <div class="card-actions justify-end">
        {#each tags as tag}
          <div class="badge badge-accent">{tag}</div>
        {/each}
      </div>
    </div>
  </div>
</a>
