import React, { useState } from "react";
import sumbar from "../images/sumbar-computer.svg";
import monit from "../images/categories/monitors.png";
import "./search.css";
import { Link, Outlet } from "react-router-dom";

export const Search = ({ cartItem, handleSearch }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
//  setQuery(e.target.value)
  // const [query, setQuery] = useState("");
  // console.log(query)

  return (
    <>
      <section className="search">
        <div className="container c-flex">
          <div className="logo width">
            <img src={sumbar} />
          </div>
          <div className="search-box f-flex">
            <input
              type="text"
              placeholder="Search"
              className="searchBar"
              onChange={(e) => handleSearch(e.target.value)}
            ></input>
            {/* <button className="btn btn-danger " type="submit" id='search-btn'></button> */}
            <i className="fa fa-search"></i>
          </div>
          <div className="icon f-flex width">
            <i className="fa fa-user-circle fa-lg"></i>
            <div className="carts">
              <Link to="/cart">
                <i className="fa fa-shopping-bag fa-lg"></i>
              </Link>
              <span className="alnan">
                {cartItem.length === 0 ? "" : cartItem.length}
              </span>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};
