import React, { useState } from "react";
import "./footer.css";
import sumbarcom from "../images/sumbar-computer.svg";
import { Link, Outlet } from "react-router-dom";

export const Footer = ({ openFooter }) => {
  console.log('footer: ', openFooter)
  return (
    <>
      <footer>
        {openFooter && (
          <div className="hidden-btn f-flex">
            <Link to='/compare'>
            <button className="btn btn-outline-danger compare-btn">
              Compare products
            </button>
            </Link>
          </div>
        )}
        <div className="container grid2">
          <div className="box1">
            <img className="sumbarIcon" src={sumbarcom} />

            <div className="iconBottom">
              <div className="address">
                <span>
                  Turkmenistan, Ashgabat, st.A.Niyazov (Hudayberdiyev), 99
                </span>
              </div>
              <div className="email">
                <span>sumbar.computer@gmail.com</span>
              </div>
              <div className="phoneNumber">
                <span>+993 (12) 49-23-43</span>
              </div>
              <div className="socialApps">
                <i className="fa fa-instagram" />
                <i className="fa fa-instagram" />
                <i className="fa fa-instagram" />
              </div>
            </div>
          </div>
          <div className="box2">
            <span className="title d-flex">
              Sumbar Computer - Computer hardware and peripherals store in
              Turkmenistan
            </span>
            <div className="about">
              <div className="box3">
                <ul>
                  <li>About us</li>
                  <li>Guarantee</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
              <div className="box4">
                <ul>
                  <li>Service</li>
                  <li>Delivery and payment</li>
                  <li>Brands</li>
                </ul>
              </div>
            </div>
            <div className="report">
              <div className="subscribe">
                <div className="input">
                  <span>Subscribe to newsletter</span>
                </div>
                <input type="text" placeholder="E-mail"></input>
              </div>
              <div className="reportProblem">
                <div className="helpWebsite">
                  <span>Help us improve the website</span>
                </div>
                <a href="#" className="btn btn-outline-danger problem">
                  Report a problem
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
