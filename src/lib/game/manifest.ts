import type { AssetsManifest } from "pixi.js";

const manifest: AssetsManifest = {
  bundles: [
    {
      name: "background",
      assets: [
        {
          alias: "layer1",
          src: "/assets/game/layers/parallax-forest-front-trees.png"
        },
        {
          alias: "layer2",
          src: "/assets/game/layers/parallax-forest-middle-trees.png"
        },
        {
          alias: "layer3",
          src: "/assets/game/layers/parallax-forest-back-trees.png"
        },
        {
          alias: "layer4",
          src: "/assets/game/layers/parallax-forest-lights.png"
        }
      ]
    }
  ]
};

export default manifest;
