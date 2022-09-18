import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./components/App";
import Store from "./features/store/Store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import '../node_modules/react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
