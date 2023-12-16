<script lang="ts">
  import GitHub from "virtual:icons/fa6-brands/github";
  import LinkedIn from "virtual:icons/fa6-brands/linkedin";
</script>

<!-- <footer class="footer p-10 bg-neutral text-neutral-content">
  <aside>
    <enhanced:img src="/static/assets/icon-new.png" alt="John Carlo Manuel Logo" />
    <p>John Carlo Manuel<br />Software Engineer and Writer</p>
  </aside>
  <nav>
    <header class="footer-title">Social</header>
    <div class="grid grid-flow-col gap-4">
      <a href="https://github.com/johncmanuel" target="_blank"><GitHub /></a>
      <a href="https://www.linkedin.com/in/johncarlomanuel/" target="_blank"><LinkedIn /></a>
    </div>
  </nav>
</footer> -->

<!-- text-base-content -->
<footer class="footer items-center p-4 bg-neutral text-neutral-content">
  <aside class="items-center grid-flow-col">
    <!-- TODO: get a better image -->
    <img src="/favicon/favicon-32x32.png" alt="John Carlo Manuel logo" />
    <p>
      Copyright © {new Date().getFullYear()} John Carlo Manuel - All rights reserved
    </p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://github.com/johncmanuel/" target="_blank">
      <GitHub />
    </a>
    <a href="https://www.linkedin.com/in/johncarlomanuel/" target="_blank">
      <LinkedIn />
    </a>
  </nav>
</footer>
