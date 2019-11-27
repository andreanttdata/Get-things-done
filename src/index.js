import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// import store /* , { history } */ from "./store";
import Routes from "./routes";
import theme from "./theme";

export const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* <Provider store={store}> */}
    <Router history={history}>
      <Routes />
    </Router>
    {/* </Provider> */}
  </ThemeProvider>,
  document.querySelector("#root")
);
