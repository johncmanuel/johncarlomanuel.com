<script lang="ts">
  import * as PIXI from "pixi.js";
  import { onDestroy, onMount } from "svelte";

  onMount(async () => {
    const app = new PIXI.Application();
    await app.init({ width: window.innerWidth, height: window.innerHeight });
    document.body.appendChild(app.canvas);

    let player = new PIXI.Graphics().rect(0, 0, 50, 50).fill(0xff0000);
    app.stage.addChild(player);

    const backgroundLabel = "background";

    PIXI.Assets.addBundle(backgroundLabel, {
      layer1: "/assets/game/layers/parallax-forest-front-trees.png",
      layer2: "/assets/game/layers/parallax-forest-middle-trees.png",
      layer3: "/assets/game/layers/parallax-forest-back-trees.png",
      layer4: "/assets/game/layers/parallax-forest-lights.png"
    });

    const backgroundAssets = await PIXI.Assets.loadBundle(backgroundLabel);

    const s = new PIXI.TilingSprite({
      texture: backgroundAssets.layer1
      // width: app.screen.width,
      // height: app.screen.height
    });

    app.stage.addChild(s);

    // Add a ticker callback to move the sprite back and forth
    let elapsed = 0.0;
    app.ticker.add((ticker) => {
      elapsed += ticker.deltaTime;
      player.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
    });
  });

  onDestroy(() => {});
</script>
