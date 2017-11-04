import Application from "./Application";
import "./index.scss";

const app = new Application({ width: 512, height: 512 });
document.body.appendChild(app.view);
app.start();
