import React, { useEffect, useState } from "react";
import { Categories } from "../main page/Categories";
import { useParams } from "react-router-dom";
import DATA from "../DATA Folder/CasesData";
import "./everyProduct.css";
import { LongDescription } from "./longDescription";

export const EveryProduct = ({ handle, select, addToCart }) => {
  const Data = DATA.productItems;
  

  const { name, id, img1 } = useParams();
  
  console.log(id);

  return (
    <>
      <section className="home">
        <div className="d-flex">
          <Categories />
          <div className="selected-image">
            <img src={select.img1} />
            <div className="select-details">
              <span>{select.name}</span>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Compare
                </label>
                <i className="fa fa-heart-o like">Add to favorites</i>
              </div>
              <div className="part-number">
                <span className="title">Part Number/Model</span>
                <div className="part-number">
                  <span>{select.id}</span>
                </div>
              </div>
              <div className="short-description">
                <span>Short description</span>
                <p>{select.ShortDescription}</p>
              </div>
              <h4 className="selected-price">{select.price}.00 TMT</h4>
              <button
                className="btn btn-danger"
                onClick={() => addToCart(select)}
              >
                ADD TO CART
              </button>
            </div>
            <LongDescription select={select} />
          </div>
        </div>
      </section>
    </>
  );
};
