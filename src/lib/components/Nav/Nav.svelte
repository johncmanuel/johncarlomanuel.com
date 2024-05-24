<script lang="ts">
  import Hamburger from "../Icons/Hamburger.svelte";
  const links = [
    { href: "/#about", text: "About" },
    { href: "/#experience", text: "Experience" },
    { href: "/#projects", text: "Projects" },
    { href: "/#education", text: "Education" },
    // my blog!!!
    { href: "http://registers.johncarlomanuel.com/", text: "Registers (Blog)" }
  ];
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <!-- Mobile -->
    <div class="dropdown">
      <div
        tabindex="0"
        role="button"
        class="btn btn-ghost lg:hidden"
        aria-label="View navigation links"
      >
        <Hamburger />
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {#each links as link}
          <li class="p-4"><a href={link.href}>{link.text}</a></li>
        {/each}
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/" aria-label="Go to Homepage">John Carlo Manuel</a>
  </div>
  <!-- Desktop -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#each links as link}
        <li class="text-lg"><a href={link.href}>{link.text}</a></li>
      {/each}
    </ul>
  </div>
  <div class="navbar-end" />
</div>
