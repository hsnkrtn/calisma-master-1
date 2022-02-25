import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

function Yonetim(props) {
  const location = useLocation();
  const Gelenveriler = location.state.BashekimlikKisiListesi;
  const fotograf = HastaneFotograflari[2].a;

  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <ul className="YonetimCards">
          {Gelenveriler.map((Gelenveriler, index) => {
            return (
              <li className="YonetimCard">
                <img className="YonetimFotograf" src={fotograf}></img>
                <h1> Hasan</h1>
                <p1> Kurtini </p1>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Yonetim;
