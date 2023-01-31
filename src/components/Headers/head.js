import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./head.css";
import { Link, Outlet } from "react-router-dom";
import Translations from "./headerTranslate";

export const Head = () => {
  const [open, setOpen] = useState(false);
  const headerMenu = [...Translations];

  const [lang, setLan] = useState("eng");

  const container = React.createRef();

  const handleLanguage = () => {
    setOpen(!open);
  };

  const componentDidMount = () => {
    document.addEventListener("mousedown", handleClickOutside);
  };
  const componentWillUnmount = () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen({
        open: false
      });
    }
  };

  return (
    <>
      <section className="head">
        <div className="container d-flex">
          <div className="left row">
            <i className="fa fa-phone fa-lg"></i>
            <label>+993(12)49-23-43</label>
          </div>
          <div className="right RText">
            <div className="about-us">
              {headerMenu.map((menu)=>{
                return(<label>{lang==='eng' ? menu.eng : menu.tkm}</label>)
              })}
              
            </div>
            <div className="language-container" ref={React.createRef()}>
              <i className="fa fa-globe fa-lg" onClick={handleLanguage}>
                {" "}
                {lang==='eng' ? "English" : 'Turkmen'}
              </i>
              {open && (
                <div className="language">
                  <ul>
                    <li className="english" onClick={()=> setLan('eng')}>English</li>
                    <li className="turkmen" onClick={()=> setLan('tkm')}>Türkmen</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};
