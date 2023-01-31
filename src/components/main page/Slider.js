import React from "react";
import { SliderCardUp } from "./SliderCardUp";
import { SliderCardDown } from "./SliderCardDown";
import { NewRecommend } from "../recommended/newRecommend";
import { Routers } from "../recommended/Routers";

export const Slider = ({ productItems, addToCart, handleTap, query, select,handleChange }) => {
  return (
    <>
      <section className="homeslide contentWidth">
        <div className="container">
          <SliderCardUp />
          <SliderCardDown />
          <NewRecommend
            productItems={productItems}
            addToCart={addToCart}
            handleTap={handleTap}
            query={query}
            select={select}
            handleChange={handleChange}
          />
          <Routers productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};
