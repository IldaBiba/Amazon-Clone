import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./Redux/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
reportWebVitals();
