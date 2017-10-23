import TWEEN from "@tweenjs/tween.js";

import { config } from "../package.json";
import Application from "./Application.js";
//import AnimationStore from "./stores/AnimationStore";

import "./index.scss";

const app = new Application({ width: 512, height: 512 });

//AnimationStore.addChangeListener(() => TWEEN.update());
//window.addEventListener("resize", renderer.handleWindowResize);

document.body.appendChild(app.view);
app.start();
