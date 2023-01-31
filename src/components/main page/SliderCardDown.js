import React, { useState } from "react";
import { SdataDown } from "./Sdata";
import { useEffect } from "react";
import "./sliderdown.css";


export const SliderCardDown = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let number = 4;
  const slideLength = SdataDown.length;
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
      <div className="slider down">
        {SdataDown.map((value, index) => {
            // console.log(value)
          return (
            <div className="box down">
              <div
                className={index === currentSlide ? "slidedown current" : "slidedown"}
                key={value.id}
              >
                {/* <img src={value.cover}/> */}

                {index === currentSlide && <img src={value.cover}/>}
                {index === currentSlide && <img src={value.cover} />}
                {index === currentSlide && <img src={value.cover} />}
                {index === currentSlide && <img src={value.cover} />}
                
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
