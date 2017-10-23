import { throttle } from "lodash";
import { WebGLRenderer } from "pixi.js";
//import RendererStore from "./stores/RendererStore";
//import AnimationStore from "./stores/AnimationStore";

export default class Renderer extends WebGLRenderer {
  constructor(...args) {
    super(...args);

    //this.handleWindowResize = throttle(this.resizeHandler.bind(this), 200);
    this._tick = this._tick.bind(this);

    this.renderables = new Set();
    this.timeSinceLastTick = null;

    //this.handleWindowResize();
  }

  start() {
    this.isActive = true;

    this.startTime = new Date();
    this.timeSinceLastTick = this.startTime;
    requestAnimationFrame(this._tick);
  }

  stop() {
    this.isActive = false;
  }

  addRenderable(renderable) {
    return this.renderables.add(renderable);
  }

  removeRenderable(renderable) {
    let hasRenderable = this.renderables.has(renderable);

    if (hasRenderable) {
      this.renderables.delete(renderable);
    }

    return hasRenderable;
  }

  handleWindowResize({ width, height }) {
    this.resize(width, height);
  }

  _tick() {
    this.deltaTime = (new Date() - this.timeSinceLastTick) / 1000;
    this.elapsedTime = (new Date() - this.startTime) / 1000;

    this._updateAll();
    this._renderAll();

    this.timeSinceLastTick = new Date();

    if (this.isActive) {
      requestAnimationFrame(this._tick);
    }
  }

  _updateAll() {
    this.renderables.forEach(renderable => {
      renderable.update({
        deltaTime: this.deltaTime,
        elapsedTime: this.elapsedTime,
      })
    });
  }

  _renderAll() {
    this.renderables.forEach(r => this.render(r));
  }
}
