import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import FirstPage from "pages/FirstPage";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route exact path="/LogIn">
            <LoginPage />
          </Route>
          <Route exact path="/Main">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Root;
