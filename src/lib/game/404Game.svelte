<script lang="ts">
  // NOTE: May not make playable on mobile and instead show a default 404 page.
  // I'll probably do some CSS media query magic

  import * as PIXI from "pixi.js";
  import { onDestroy, onMount } from "svelte";
  import Manifest from "./manifest";
  import { background } from "./bundles";
  import type { GameObject, GameState } from "./types";

  onMount(async () => {
    // PIXI.TexturePool.textureOptions.scaleMode = "nearest";
    // Game is mainly pixel art based, so set scale mode to nearest for all
    // textures
    PIXI.TextureSource.defaultOptions.scaleMode = "nearest";
    PIXI.Assets.init({ manifest: Manifest });

    const GRAVITY = 0.5;
    const JUMP_FORCE = -15;
    const INITIAL_GAME_SPEED = 2;
    const SPEED_INCREMENT = 0.01;
    const GROUND_HEIGHT = window.innerHeight - 50;

    const highScoreKey = "highScore";
    const currentHighScore =
      parseInt(localStorage.getItem(highScoreKey) as string) || 0;

    // Game state
    const gameState: GameState = {
      isGameOver: false,
      isPlaying: false,
      score: 0,
      speed: INITIAL_GAME_SPEED,
    };

    const app = new PIXI.Application();
    await app.init({
      width: window.innerWidth,
      height: window.innerHeight,
      resizeTo: window,
    });
    document.body.appendChild(app.canvas);

    const keys: Record<string, boolean> = {};
    enum PlayerControls {
      Space = " ",
    }

    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (Object.values<string>(PlayerControls).includes(e.key)) {
        keys[e.key] = true;
      }
      if (gameState.isGameOver && e.key === PlayerControls.Space) {
        restartGame();
      }
      if (
        !gameState.isPlaying &&
        !gameState.isGameOver &&
        e.key === PlayerControls.Space
      ) {
        startGame();
      }
    });

    window.addEventListener("keyup", (e: KeyboardEvent) => {
      if (Object.values<string>(PlayerControls).includes(e.key)) {
        keys[e.key] = false;
      }
    });

    const createTextStyle = (size: number): PIXI.TextStyle => {
      return new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: size,
        fill: 0xffffff,
        align: "center",
      });
    };
    const playButton = new PIXI.Container();
    const buttonBackground = new PIXI.Graphics()
      .rect(0, 0, 200, 50)
      .fill(0x4caf50);
    const buttonText = new PIXI.Text("PLAY", createTextStyle(24));
    buttonText.anchor.set(0.5);
    buttonText.position.set(100, 25);

    playButton.addChild(buttonBackground);
    playButton.addChild(buttonText);
    playButton.position.set(
      window.innerWidth / 2 - 100,
      window.innerHeight / 2,
    );
    playButton.eventMode = "static";
    playButton.cursor = "pointer";
    playButton.addEventListener("pointertap", () => {
      startGame();
    });

    // Instructions text
    const instructionsText = new PIXI.Text(
      "Press SPACE to jump\nAvoid obstacles!",
      createTextStyle(20),
    );
    instructionsText.anchor.set(0.5);
    instructionsText.position.set(
      window.innerWidth / 2,
      window.innerHeight / 2 + 100,
    );

    const player: GameObject = {
      sprite: new PIXI.Graphics().rect(0, 0, 50, 50).fill(0xff0000),
      velocity: new PIXI.Point(0, 0),
      isColliding: (other: GameObject) => {
        const b1 = player.sprite.getBounds();
        const b2 = other.sprite.getBounds();
        return !(
          b1.right < b2.left ||
          b1.left > b2.right ||
          b1.bottom < b2.top ||
          b1.top > b2.bottom
        );
      },
    };
    player.sprite.position.set(100, GROUND_HEIGHT - 50);
    player.sprite.visible = false;

    const obstacles: GameObject[] = [];
    let obstacleSpawnTimer = 0;
    const OBSTACLE_SPAWN_RATE = 120;

    function createObstacle(): GameObject {
      const height = 30 + Math.random() * 20;
      const obstacle: GameObject = {
        sprite: new PIXI.Graphics().rect(0, 0, 30, height).fill(0x00ff00),
        isColliding: (other: GameObject) => {
          const b1 = obstacle.sprite.getBounds();
          const b2 = other.sprite.getBounds();
          return !(
            b1.right < b2.left ||
            b1.left > b2.right ||
            b1.bottom < b2.top ||
            b1.top > b2.bottom
          );
        },
      };
      obstacle.sprite.position.set(window.innerWidth, GROUND_HEIGHT - height);
      app.stage.addChild(obstacle.sprite);
      return obstacle;
    }

    const scoreText = new PIXI.Text("Score: 0", createTextStyle(24));
    scoreText.position.set(20, 20);

    const highScoreText = new PIXI.Text(
      `High Score: ${currentHighScore}`,
      createTextStyle(24),
    );
    highScoreText.position.set(20, 50);

    const gameOverText = new PIXI.Text(
      "Game Over!\nPress SPACE to restart",
      createTextStyle(36),
    );
    gameOverText.anchor.set(0.5);
    gameOverText.position.set(window.innerWidth / 2, window.innerHeight / 2);
    gameOverText.visible = false;

    await PIXI.Assets.loadBundle(background.name);

    const createBackground = (texture: PIXI.Texture): PIXI.TilingSprite => {
      const tiling = new PIXI.TilingSprite({
        texture: texture,
      });
      const scale = Math.max(
        window.innerWidth / tiling.texture.width,
        window.innerHeight / tiling.texture.height,
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

    app.stage.addChild(player.sprite);
    app.stage.addChild(scoreText);
    app.stage.addChild(gameOverText);
    app.stage.addChild(playButton);
    app.stage.addChild(instructionsText);
    app.stage.addChild(highScoreText);

    function restartGame() {
      gameState.isGameOver = false;
      gameState.score = 0;
      gameState.speed = INITIAL_GAME_SPEED;

      player.sprite.position.y = GROUND_HEIGHT - 50;
      player.velocity.y = 0;

      obstacles.forEach((obstacle) => {
        app.stage.removeChild(obstacle.sprite);
      });
      obstacles.length = 0;

      gameOverText.visible = false;
    }

    function handleGameOver() {
      gameState.isGameOver = true;
      gameOverText.visible = true;

      // Save score to local storage
      const score = Math.max(
        parseInt(localStorage.getItem(highScoreKey) as string) || 0,
        gameState.score,
      );

      localStorage.setItem(highScoreKey, score.toString());
      highScoreText.text = `High Score: ${score}`;
    }

    function startGame() {
      gameState.isPlaying = true;
      gameState.isGameOver = false;
      gameState.score = 0;
      gameState.speed = INITIAL_GAME_SPEED;

      // Hide title screen elements
      playButton.visible = false;
      instructionsText.visible = false;

      // Show game elements
      player.sprite.visible = true;
      scoreText.visible = true;
    }

    const gameLoop = (ticker: PIXI.Ticker) => {
      if (!gameState.isPlaying || gameState.isGameOver) return;

      // TODO: Change rate at which score is incremented
      gameState.score += 1;
      gameState.speed += SPEED_INCREMENT;

      scoreText.text = `Score: ${Math.floor(gameState.score / 10)}`;

      bgX += bgSpeed;
      for (let i = backgroundLayers.length - 1; i >= 0; i--) {
        backgroundLayers[i].tilePosition.x = bgX / i;
      }

      if (
        keys[PlayerControls.Space] &&
        player.sprite.position.y >= GROUND_HEIGHT - 50
      ) {
        player.velocity.y = JUMP_FORCE;
      }

      player.velocity.y += GRAVITY;
      player.sprite.position.y += player.velocity.y;

      if (player.sprite.position.y > GROUND_HEIGHT - 50) {
        player.sprite.position.y = GROUND_HEIGHT - 50;
        player.velocity.y = 0;
      }

      obstacleSpawnTimer++;
      if (obstacleSpawnTimer > OBSTACLE_SPAWN_RATE) {
        obstacles.push(createObstacle());
        obstacleSpawnTimer = 0;
      }

      // Update obstacles
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obstacle = obstacles[i];
        obstacle.sprite.position.x -= gameState.speed;

        if (obstacle.sprite.position.x < -50) {
          app.stage.removeChild(obstacle.sprite);
          obstacles.splice(i, 1);
          continue;
        }

        if (obstacle.isColliding(player)) {
          handleGameOver();
        }
      }
    };

    app.ticker.add(gameLoop);
  });

  onDestroy(() => {});
</script>
