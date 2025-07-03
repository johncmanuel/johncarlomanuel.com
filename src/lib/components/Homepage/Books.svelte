<script lang="ts">
  import Link from "$components/Link/Link.svelte";
  // import { Book } from "$lib/types/books";
  export let books: any[] = [];
</script>

<div id="books" class="flex flex-col gap-4 max-w-full px-4">
  <div class="flex gap-4 max-w-full overflow-hidden md:px-4 flex-col">
    <h2 class="text-2xl">published books</h2>
    <div class="flex items-start flex-col justify-center gap-5 px-4 dark:opacity-75">
      {#each books as book}
        <article class="flex flex-col gap-1">
          <Link
            href={book.link}
            aClass={"flex flex-row flex-wrap gap-1"}
            additionalText={book.title}
            additionalTextClass={"text-lg font-bold"}
            omitHref={false}
          />
          <p>{book.description}</p>
        </article>
      {/each}
    </div>
  </div>
</div>
