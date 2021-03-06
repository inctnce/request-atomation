import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./pages/container";
import "./index.module.scss";
import * as serviceWorker from "./serviceWorker";

import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/User/Login/container";
import SignUp from "./pages/User/SignUp/container";
import Admin from "./pages/Admin/container";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/admin" render={() => <Admin />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/registration" render={() => <SignUp />} />
          <Route path="/" render={() => <AppContainer />} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

serviceWorker.unregister();
