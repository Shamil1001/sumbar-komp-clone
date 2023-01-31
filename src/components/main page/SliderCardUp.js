import React from "react";
import { useState, useEffect } from "react";
import {SdataUp} from "./Sdata";
import "./slider.css";

export const SliderCardUp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = SdataUp.length;
  let autoscrol = true;
  let slideInterwal;
  let interwalTime = 5000;


  const nextSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterwal = setInterval(nextSlide, interwalTime);
  }
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  // useEffect(() => {
  //   if(autoscrol){
  //     auto()
  //   }
  // }, [currentSlide]);

  return (
    <>
      <div className="slider up">
        {SdataUp.map((value, index) => {
          return (
            <div className="box top ">
              <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={index}
              >
                {index === currentSlide && <img src={value.cover} /> }
              </div>
            </div>
          );
        })}
      </div>
        <div className="slider down">

        </div>

    </>
  );
};
