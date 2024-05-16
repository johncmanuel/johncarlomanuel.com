<script lang="ts">
  import GitHub from "virtual:icons/fa6-brands/github";
  import LinkedIn from "virtual:icons/fa6-brands/linkedin";
  import Twitter from "virtual:icons/fa6-brands/twitter";
  import Youtube from "virtual:icons/fa6-brands/youtube";
  import Email from "virtual:icons/fa6-solid/envelope";
  import Webring from "./webring.svelte";

  const skylineCSCWebring =
    "https://raw.githubusercontent.com/Skyline-College-Computer-Science-Club/clubwebring/master/webring.json";
</script>

<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav>
    <div class="grid grid-flow-row md:grid-flow-col gap-16 lg:gap-12">
      <a href="https://github.com/johncmanuel/" target="_blank">
        <GitHub />
      </a>
      <a href="https://www.linkedin.com/in/johncarlomanuel/" target="_blank">
        <LinkedIn />
      </a>
      <a href="https://twitter.com/johncmanuel" target="_blank">
        <Twitter />
      </a>
      <a href="https://www.youtube.com/@johncarlomanuel" target="_blank">
        <Youtube />
      </a>
      <a href="mailto:me@johncarlomanuel.com" target="_blank">
        <Email />
      </a>
    </div>
  </nav>
  <Webring src={skylineCSCWebring} />
  <aside>
    <p>
      Copyright © {new Date().getFullYear()} John Carlo Manuel - All rights reserved.
    </p>
  </aside>
</footer>
