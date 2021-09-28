import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import FirstPage from "pages/FirstPage";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import CategoryProductsPage from "pages/CategoryProductsPage";
import DetailProduct from "pages/DetailProduct";
import Cart from "pages/Cart";
import Like from "pages/Like";

const theme = {
  colors: {
    primary: "#111",
    black: "#000",
    white: "#fff",
    blue: "blue",
  },
};

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
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
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/like">
            <Like />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;
