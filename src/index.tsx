import React from "react";
import ReactDOM from "react-dom/client";
import { enableMapSet } from "immer";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import Helmet from "react-helmet";
import { ToastContainer } from "react-toastify";
import { globalStyles } from "config/styles/GlobalStyle";
import { PageRoot } from "pages/PageRoot";
import { Provider } from "react-redux";
import store from "./store";
import { Theme } from "config/styles/Theme";
import "react-toastify/ReactToastify.min.css";
import "./styles.css";

enableMapSet();

const appGlobalStyles = <GlobalStyles styles={globalStyles} />;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <Helmet title="New Year's Advent calendar" />
    <BrowserRouter>
      <Theme>
        {appGlobalStyles}
        <PageRoot />
      </Theme>
    </BrowserRouter>
    <ToastContainer />
  </Provider>,
);
