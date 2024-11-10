import * as PIXI from "pixi.js";

export interface GameObject {
  sprite: PIXI.Graphics | PIXI.Sprite;
  velocity?: PIXI.Point;
  isColliding?: (other: GameObject) => boolean;
}

export interface GameState {
  isGameOver: boolean;
  isPlaying: boolean;
  score: number;
  speed: number;
}
