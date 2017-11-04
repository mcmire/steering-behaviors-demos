import { Graphics, Point } from "pixi.js";

export default class Triangle extends Graphics {
  constructor(app) {
    super();

    this.app = app;

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

  update({ deltaTime }) {
    this.position.x = (this.position.x + 200 * deltaTime) % this.app.width;
  }
}
