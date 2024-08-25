<script lang="ts">
  // NOTE: May not make playable on mobile and instead show a default 404 page.
  // I'll probably do some CSS media query magic

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

    const keys: Record<string, boolean> = {};
    enum PlayerControls {
      Space = " "
    }

    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (Object.values<string>(PlayerControls).includes(e.key)) {
        keys[e.key] = true;
      }
    });
    window.addEventListener("keyup", (e: KeyboardEvent) => {
      if (Object.values<string>(PlayerControls).includes(e.key)) {
        keys[e.key] = false;
      }
    });

    let player = new PIXI.Graphics().rect(0, window.innerHeight - 50, 50, 50).fill(0xff0000);

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
    // TODO: Fix typing issues with background.assets
    const backgroundLayers: PIXI.TilingSprite[] = [];
    for (let i = background.assets.length - 1; i >= 0; i--) {
      const t = createBackground(PIXI.Texture.from(background.assets[i].src));
      backgroundLayers.push(t);
    }

    // Manage background speed
    const bgSpeed = 0.5;
    let bgX = 0.0;

    app.stage.addChild(player);

    const gameLoop = (ticker: PIXI.Ticker) => {
      bgX = bgX + bgSpeed;
      for (let i = backgroundLayers.length - 1; i >= 0; i--) {
        backgroundLayers[i].tilePosition.x = bgX / i;
      }
      console.log(keys);
    };

    app.ticker.add(gameLoop);
  });

  onDestroy(() => {});
</script>
