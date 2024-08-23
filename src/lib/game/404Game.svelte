<script lang="ts">
  import * as PIXI from "pixi.js";
  import { onDestroy, onMount } from "svelte";
  import Manifest from "./manifest";
  import { background } from "./bundles";

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

    await PIXI.Assets.loadBundle(background.name);

    const createBackground = (texture: PIXI.Texture): PIXI.TilingSprite => {
      const tiling = new PIXI.TilingSprite({
        texture: texture
      });
      const scale = Math.max(
        window.innerWidth / tiling.texture.width,
        window.innerHeight / tiling.texture.height
      );
      tiling.position.set(0, 0);
      tiling.scale.set(scale, scale);
      app.stage.addChild(tiling);
      return tiling;
    };

    // Render and track the background sprites
    const backgroundLayers: PIXI.TilingSprite[] = [];
    for (let i = background.assets.length - 1; i >= 0; i--) {
      const t = createBackground(PIXI.Texture.from(background.assets[i].src));
      backgroundLayers.push(t);
    }

    app.stage.addChild(player);
    // Add a ticker callback to move the sprite back and forth
    let elapsed = 0.0;
    app.ticker.add((ticker) => {
      elapsed += ticker.deltaTime;
      player.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
    });
  });

  onDestroy(() => {});
</script>
