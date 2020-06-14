import $$ from "dom7";
import Framework7 from "framework7/framework7.esm.bundle.js";
// import jQuery from "jquery";

// Import F7 Styles
import "framework7/css/framework7.bundle.css";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.scss";

// Import Routes
import routes from "./routes.js";

// Import main app component
import App from "../app.f7.html";

// window.jQuery = jQuery;
// window.$ = jQuery;

const f7Config = {
  root: "#app",
  component: App,
  name: "SND App",
  version: "0.0.1",
  theme: "auto", // Options: [ios, md, aurora or auto]
  routes: routes,
};

const app = new Framework7(f7Config);
