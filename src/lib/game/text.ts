import * as PIXI from "pixi.js";

export interface TextStyleConfig {
  fontSize: number;
  fill: number;
  align: "left" | "center" | "right";
  fontFamily?: string;
}

export interface TextConfig {
  text: string;
  x: number;
  y: number;
  anchor?: PIXI.Point;
  style: TextStyleConfig;
  visible?: boolean;
}

export const createGameTexts = (width: number, height: number) => {
  const titleText = createText({
    text: "404 Runner",
    x: width / 2,
    y: height / 3,
    anchor: new PIXI.Point(0.5, 0.5),
    style: textStyles.title
  });

  const playButtonText = createText({
    text: "PLAY",

    // Positioned relative to the button container
    x: 100,

    y: 25,
    anchor: new PIXI.Point(0.5, 0.5),
    style: textStyles.button
  });

  const instructionsText = createText({
    text: "Press SPACE or UP to jump\nAvoid obstacles!",
    x: width / 2,
    y: height / 2 + 100,
    anchor: new PIXI.Point(0.5, 0.5),
    style: textStyles.instructions
  });

  const scoreText = createText({
    text: "Score: 0",
    x: 20,
    y: 20,
    style: textStyles.score,
    visible: false
  });

  const gameOverText = createText({
    text: "Game Over!\nPress SPACE to restart",
    x: width / 2,
    y: height / 2,
    anchor: new PIXI.Point(0.5, 0.5),
    style: textStyles.gameOver,
    visible: false
  });

  const highScoreText = createText({
    text: `High Score: 0`,
    x: 20,
    y: 50,
    // Use the same style as the score text
    style: textStyles.score,
    visible: false
  });

  return {
    titleText,
    playButtonText,
    instructionsText,
    scoreText,
    gameOverText,
    highScoreText,

    // Utility functions for common text operations
    showGameElements: () => {
      titleText.visible = false;
      instructionsText.visible = false;
      scoreText.visible = true;
      gameOverText.visible = false;
    },

    showGameOver: () => {
      scoreText.visible = false;
      gameOverText.visible = true;
    },

    showTitleScreen: () => {
      titleText.visible = true;
      instructionsText.visible = true;
      scoreText.visible = false;
      gameOverText.visible = false;
    },

    resetTexts: () => {
      scoreText.text = "Score: 0";
      scoreText.visible = true;
      gameOverText.visible = false;
    }
    // ================================
  };
};

export type GameTexts = ReturnType<typeof createGameTexts>;

export const createTextStyle = (config: TextStyleConfig): PIXI.TextStyle => {
  return new PIXI.TextStyle({
    fontFamily: config.fontFamily || "Arial",
    fontSize: config.fontSize,
    fill: config.fill,
    align: config.align
  });
};

export const createText = (config: TextConfig): PIXI.Text => {
  const text = new PIXI.Text(config.text, createTextStyle(config.style));

  text.position.set(config.x, config.y);

  if (config.anchor) {
    text.anchor.set(config.anchor.x, config.anchor.y);
  }

  if (config.visible !== undefined) {
    text.visible = config.visible;
  }

  return text;
};

// Contains default values, can be changed if needed
export const textStyles = {
  title: {
    fontSize: 48,
    fill: 0xffffff,
    align: "center" as const
  },
  button: {
    fontSize: 24,
    fill: 0xffffff,
    align: "center" as const
  },
  instructions: {
    fontSize: 20,
    fill: 0xffffff,
    align: "center" as const
  },
  score: {
    fontSize: 24,
    fill: 0xffffff,
    align: "left" as const
  },
  gameOver: {
    fontSize: 36,
    fill: 0xffffff,
    align: "center" as const
  }
};
