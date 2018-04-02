import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

WebFont.load({
  google: {
    families: ["Nunito:300,400,700", "Open Sans:300,400,700", "sans-serif"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
