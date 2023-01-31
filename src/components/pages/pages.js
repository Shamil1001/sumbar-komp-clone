import React from "react";
import { Home } from "../main page/Home";

export const Pages = ({ productItems, cartItem, addToCart, handleTap, query, select, handleChange}) => {
  return (
    <>
      <Home
        productItems={productItems}
        cartItem={cartItem}
        addToCart={addToCart}
        handleTap={handleTap}
        query={query}
        select={select}
        handleChange={handleChange}
      />
    </>
  );
};
