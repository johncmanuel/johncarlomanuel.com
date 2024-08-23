<script lang="ts">
  import * as PIXI from "pixi.js";
  import { onDestroy, onMount } from "svelte";
  import Manifest from "./manifest";

  onMount(async () => {
    // PIXI.TexturePool.textureOptions.scaleMode = "nearest";
    // Game is mainly pixel art based, so scale mode to nearest for all
    // textures
    PIXI.TextureSource.defaultOptions.scaleMode = "nearest";
    PIXI.Assets.init({ manifest: Manifest });

    const app = new PIXI.Application();
    await app.init({ width: window.innerWidth, height: window.innerHeight, resizeTo: window });
    document.body.appendChild(app.canvas);

    let player = new PIXI.Graphics().rect(0, 0, 50, 50).fill(0xff0000);
    app.stage.addChild(player);

    const backgroundLabel = "background";
    const backgroundAssets = await PIXI.Assets.loadBundle(backgroundLabel);
    console.log(backgroundAssets);

    const s = new PIXI.TilingSprite({
      texture: backgroundAssets.layer1
      // width: app.screen.width,
      // height: app.screen.height
    });
    const scale = Math.max(
      window.innerWidth / s.texture.width,
      window.innerHeight / s.texture.height
    );
    s.scale.set(scale, scale);

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
