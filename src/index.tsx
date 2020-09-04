import "string.prototype.startswith"; //For IE compatibility this must be first
import * as React from "react";
import * as ReactDOM from "react-dom";
import AppContainer from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "antd/dist/antd.css";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import "./assets/styles/vendor.css";
import "./assets/styles/main.css";

ReactDOM.render(
  /Chrome|Firefox|Safari/.test(navigator.userAgent) ? (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) : (
    <h2 style={{ color: "#1890ff", padding: "5px" }}>
      This app is optimized for Chrome, FF and Safari. Please switch browsers.
    </h2>
  ),
  document.getElementById("root") as HTMLElement
);
