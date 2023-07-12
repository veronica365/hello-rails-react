// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import React from "react";
import App from "./controllers/app";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));
