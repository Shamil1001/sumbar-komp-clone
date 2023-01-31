import React, { Component, Fragment, useState } from "react";
import { Header } from "./components/Headers/header";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRoutes
} from "react-router-dom";
import { Pages } from "./components/pages/pages";
import DATA from "./components/DATA Folder/CasesData";
import { Footer } from "./components/footer/footer";
import Cart from "./components/cart/cart";
import { AboutUS } from "./components/Headers/aboutUS";
import { EveryProduct } from "./components/EveryProduct/everyProduct";
import {Compare} from './components/recommended/compare'

function App() {
  const { productItems } = DATA;
  const [cartItem, setCartItem] = useState([]);
  const [query, setQuery] = useState("");
  const [openFooter, setOpenFooter] = useState(false);

  const handleChange = (item) => {
    if (item.compared) {
      item.compared = false;
      setOpenFooter(item.compared);
    } else {
      item.compared = true;
      setOpenFooter(item.compared);
    }
    console.log(item.compared);
  };

  const handleSearch = (e) => {
    setQuery(e);
  };

  const [select, setSelect] = useState([]);

  const handleTap = (item) => {
    setSelect(item);
    console.log(item);
  };

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decrease = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Header cartItem={cartItem} handleSearch={handleSearch} />
      <Routes>
        <Route
          exact
          path="*"
          element={
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              cartItem={cartItem}
              handleTap={handleTap}
              query={query}
              select={select}
              handleChange={handleChange}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decrease={decrease}
            />
          }
        />
        <Route exact path="/about/:id/" element={<AboutUS />} />
        <Route exact path="/compare" element={<Compare />} />
        <Route
          exact
          path="/products/:id"
          element={<EveryProduct select={select} addToCart={addToCart} />}
        />
      </Routes>

      <Footer openFooter={openFooter} />
    </>
  );
}

export default App;
