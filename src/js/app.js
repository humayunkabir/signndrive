import $$ from "dom7";
import Framework7 from "framework7/framework7.esm.bundle.js";

// Import F7 Styles
import "framework7/css/framework7.bundle.css";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.scss";

// Import Routes
import routes from "./routes.js";

// Import main app component
import App from "../app.f7.html";

const f7Config = {
  root: "#app",
  component: App,
  name: "f7 core demo",
  version: "0.0.1",
  theme: "auto", // Options: [ios, md, aurora or auto]
  routes: routes,
};

const app = new Framework7(f7Config);
