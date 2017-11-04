import { Graphics, Point } from "pixi.js";
import Application from "../Application";
import Clock from "../Clock";

export default class Triangle extends Graphics {
  constructor(private app: Application) {
    super();

    this
      .beginFill(0xFFFFFF)
        .moveTo(0, 0)
        .lineTo(-4, -1.5)
        .lineTo(-3, 0)
        .lineTo(-4, 1.5)
        .lineTo(0, 0)
      .endFill();

    this.position = new Point(100, 100);
    this.scale = new Point(8, 8);
  }

  update(clock: Clock): void {
    this.position.x =
      (this.position.x + 200 * clock.deltaTime) % this.app.width;
  }
}
