import Renderer from "./Renderer";
import Triangle from "./objects/Triangle";

export default class Application {
  constructor({ width, height }) {
    this.renderer = new Renderer({ width, height });
    this.view = this.renderer.view;

    this._addRenderables();
  }

  start() {
    this.renderer.start();
  }

  stop() {
    this.renderer.stop();
  }

  _addRenderables() {
    this.renderer.addRenderable(new Triangle());
  }
}
