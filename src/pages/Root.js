import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import FirstPage from "pages/FirstPage";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import CategoryProductsPage from "pages/CategoryProductsPage";
import DetailProduct from "pages/DetailProduct";

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/main">
            <MainPage />
          </Route>
          <Route exact path="/product/:category">
            <CategoryProductsPage />
          </Route>
          <Route exact path="/singleproduct/:id">
            <DetailProduct />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Root;
