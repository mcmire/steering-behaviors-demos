import { DisplayObject, WebGLRenderer } from "pixi.js";
import Clock from "./Clock";
import Dimensions from "./Dimensions";

interface Renderable extends DisplayObject {
  update: (clock: Clock) => void;
}

export default class Renderer extends WebGLRenderer {
  private renderables: Set<Renderable>;
  private isActive: boolean;

  constructor(...args: any[]) {
    super(...args);

    this.tick = this.tick.bind(this);

    this.isActive = false;
    this.renderables = new Set();
  }

  public start(): void {
    this.isActive = true;

    const startTime = new Date().getTime();

    this.scheduleTick({
      startTime: startTime,
      timeSinceLastTick: startTime,
      deltaTime: 0,
      elapsedTime: 0
    });
  }

  public stop(): void {
    this.isActive = false;
  }

  public addRenderable(renderable: Renderable): void {
    this.renderables.add(renderable);
  }

  public removeRenderable(renderable: Renderable): void {
    let hasRenderable: boolean = this.renderables.has(renderable);

    if (hasRenderable) {
      this.renderables.delete(renderable);
    }
  }

  public handleWindowResize({ width, height }: Dimensions): void {
    this.resize(width, height);
  }

  private scheduleTick(clock: Clock): void {
    requestAnimationFrame(() => this.tick(clock));
  }

  private tick(clock: Clock): void {
    const updatedClock: Clock = {
      ...clock,
      deltaTime: (new Date().getTime() - clock.timeSinceLastTick) / 1000,
      elapsedTime: (new Date().getTime() - clock.startTime) / 1000
    };

    this.updateAll(updatedClock);
    this.renderAll();

    updatedClock.timeSinceLastTick = new Date().getTime();

    if (this.isActive) {
      this.scheduleTick(updatedClock);
    }
  }

  private updateAll(clock: Clock): void {
    this.renderables.forEach(renderable => {
      renderable.update(clock);
    });
  }

  private renderAll(): void {
    this.renderables.forEach(r => this.render(r));
  }
}
