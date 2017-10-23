import { Graphics, Point } from "pixi.js";

export default class Triangle extends Graphics {
  constructor() {
    super();

    //this
      //.beginFill(0xFFFFFF)
        //.moveTo(0, 0)
        //.lineTo(4, -2)
        //.lineTo(4, 2)
        //.lineTo(0, 0)
      //.endFill();

    //this.position = new Point(100, 100);
    //this.scale = new Point(10, 10);

    this.beginFill(0xFF3300);
    this.lineStyle(4, 0xffd900, 1);

    this.moveTo(0, 0);
    this.lineTo(100, 0);
    this.lineTo(100, 100);
    this.lineTo(0, 100);
    this.lineTo(0, 0);
    this.endFill();
  }

  update({ elapsedTime }) {
    this.position.x = 50 + 40 * Math.sin(elapsedTime * 2);
    this.position.y = 50 + 40 * Math.cos(elapsedTime * 2);
  }
}
