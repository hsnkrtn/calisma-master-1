import React from "react";
import "../App.css";
import { useState } from "react";

function ResimlerSlider(props) {
  const [ResimNumarasi, setResimNumarasi] = useState(0);

  const Fotograflar = props.Fotograf;
  console.log(Fotograflar);

  const Foto= props.Fotograf;

  return (
    <div className="ResimSlider">
      <div className="HaberFotografi">
        <img src={Fotograflar[ResimNumarasi]}></img>
      </div>

      <div className="HrStyle" >
        <hr></hr>{" "}
      </div>

      <div className="KucukFotograflar">
        <ul>
          {Fotograflar.map((Fotograf, index) => {
            return (
              <li
                className="ResimSliderFotografCard "
                onClick={() => setResimNumarasi(ResimNumarasi + 1)}
              >
                <img src={Fotograf}></img>
              </li>
            );
          })}
        </ul>
      </div>
    </div>

      <div className="ResimSliderFotograf ">
        <img src={Foto[ResimNumarasi]}></img>
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
      {Foto.map((Kucukfotograf, index) => { 
        return (
            <li className="kucukfotograf">
                     <img src={Kucukfotograf}></img>

            </li>
          );
       })}
          
      </ul>

    </div>  </div>

  );
}

export default ResimlerSlider;
