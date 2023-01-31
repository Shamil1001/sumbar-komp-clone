import React from "react";
import { Categories } from "./Categories";
import { Slider } from "./Slider";
import './Home.css'

export const Home = ({ productItems, addToCart, handleTap, query, select, handleChange }) => {
  return (
    <>
      <section className="home">
        <div className="d-flex">
          {/* <div className="categoryComponent"> */}
            <Categories />
          {/* </div> */}
          <div className="sliderComponent">
            <Slider
            productItems={productItems}
            addToCart={addToCart}
            handleTap={handleTap}
            query={query}
            select={select}
            handleChange={handleChange}
          />
          </div>
        </div>
      </section>
    </>
  );
};
