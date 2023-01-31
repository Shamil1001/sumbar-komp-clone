import React from "react";
import monitor from "../images/categories/monitors.png";
import "./categories.css";
import accessories from "../images/categories/PC Accessories.png";
import periphery from "../images/categories/Periphery.png";
import storage from "../images/categories/storage.png";
import aio from "../images/categories/aio and brend pc.png";
import laptops from "../images/categories/laptops.png";
import mobilePeriphery from "../images/categories/mobile peripherals.png";
import printers from "../images/categories/printer.png";
import network from "../images/categories/network.png";
import safety from "../images/categories/safety system.png";
import automation from "../images/categories/automation.png";
import stabilizers from "../images/categories/stabilizers.png";
import furniture from "../images/categories/furniture.png";
import appliances from "../images/categories/appliances.png";
import different from "../images/categories/different.png";
import cases from '../images/items_of_categories/cases.png'
import motherboard from '../images/items_of_categories/motherboard.png'
// import from '../images/items_of_categories/'
import { ItemsOfCategories } from "./ItemsOfCategories";
import { Comments } from "./Comments";

export const Categories = () => {
  const data = [
    {
      Img: monitor,
      Name: "MONITORS"
    },
    {
      Img: accessories,
      Name: "PC ACCESSORIES"
    },
    {
      Img: periphery,
      Name: "PERIPHERY"
    },
    {
      Img: storage,
      Name: "STORAGE"
    },
    {
      Img: aio,
      Name: "AIO AND BREND PC"
    },
    {
      Img: laptops,
      Name: "LAPTOPS AND OTHER"
    },
    {
      Img: mobilePeriphery,
      Name: "MOBILE PERIPHERALS"
    },
    {
      Img: printers,
      Name: "PRINTER AND OFFICE APPLIANCES"
    },
    {
      Img: network,
      Name: "NETWORK HARDWARE"
    },
    {
      Img: safety,
      Name: "SAFETY SYSTEM"
    },
    {
      Img: automation,
      Name: "AUTOMATION"
    },
    {
      Img: stabilizers,
      Name: "STABILIZERS AND UPS"
    },
    {
      Img: furniture,
      Name: "FURNITURE"
    },
    {
      Img: appliances,
      Name: "APPLIANCESS"
    },
    {
      Img: different,
      Name: "DIFFERENT"
    }
  ];

  return (
    <>
      <div className="cat">
        <div className="products">
          <i className="fa fa-bars"></i>
          <span>ALL PRODUCTS</span>
        </div>
        <div className="categories">
          {data.map((value, index) => {
            // console.log(value.Name)
            return (
              <div className={value.Name} key={index}>
                <div className="box">
                  <img src={value.Img} alt={value.Name} />
                  <span>{value.Name}</span>
                  <div className="arrow f-flex">
                    <i className="fa fa-caret-right"></i>
                  </div>
                  <ItemsOfCategories/>
                </div>
              </div>
            );
          })}
        </div>
          <Comments/>
      </div>

    </>
  );
};
