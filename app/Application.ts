import Renderer from "./Renderer";
import Dimensions from "./Dimensions";
import Triangle from "./objects/Triangle";

export default class Application {
  private renderer: Renderer;
  public view: HTMLCanvasElement;
  public width: number;
  public height: number;

  constructor({ width, height }: Dimensions) {
    this.renderer = new Renderer({ width, height });
    this.view = this.renderer.view;
    this.width = this.renderer.width;
    this.height = this.renderer.height;

    this.addRenderables();
  }

  public start(): void {
    this.renderer.start();
  }

  public stop(): void {
    this.renderer.stop();
  }

  private addRenderables() {
    this.renderer.addRenderable(new Triangle(this));
  }
}
