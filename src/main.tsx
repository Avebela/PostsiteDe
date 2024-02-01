import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/reset.css";
import "./styles/common.css";
//import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
