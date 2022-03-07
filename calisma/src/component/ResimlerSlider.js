import React from "react";
import "../App.css";
import { useState } from "react";

function ResimlerSlider(props) {
  const [ResimNumarasi, setResimNumarasi] = useState(0);
  return (
    <div className="ResimSlider">
      <div className="ResimSliderFotograf"  > 
      <div
        className="ResimSliderLeftButton"
        onClick={() => {
          setResimNumarasi(ResimNumarasi - 1);
        }}
      >
        <span>
          <i className="fa fa-angle-left"></i>
        </span>
      </div>
      <div className="ResimSliderFotograf ">
        <img src={props.Fotograf[ResimNumarasi]}></img>
      </div>
 
      <div
        className="ResimSliderRightButon"
        onClick={() => {
          setResimNumarasi(ResimNumarasi + 1);
        }}
      >
        <span>
          <i className="fa fa-angle-right"></i>
        </span>
      </div>
      </div>
   
      <div className="KucukFotograflar"> 
      <ul >
        {props.Fotograf.map((Kucukfotograf, index) => {
          return (
            <li className="kucukfotograf">
                     <img src={Kucukfotograf[ResimNumarasi]}></img>

            </li>
          );
        })}
      </ul>

    </div>  </div>
  );
}

export default ResimlerSlider;
