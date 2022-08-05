import { render } from "solid-js/web";
import { Router, hashIntegration } from "@solidjs/router";
import App from "./app";

render(() => {
  return (
    <>
      <Router source={hashIntegration()}>
        <App />
      </Router>
    </>
  );
}, document.getElementById("root") as HTMLElement);
