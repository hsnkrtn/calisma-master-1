import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

function Yonetim(props) {
  const location = useLocation();
  const Gelenveriler = location.state.Gonderilenveriler;
  const Baslik = location.state.Baslik;
  const fotograf = HastaneFotograflari[2].a;

  return (
    <div className="RouterSayfasi">
      <div className="RouterYonetimSayfasiIcerik">
        <h1>{Baslik}</h1>
        <div>
          
          <img></img> <h1></h1> <p1> </p1>{" "}
        </div>
        <ul className="YonetimCards">
          {Gelenveriler.map((Gelenveriler, index) => {
            return (
              <li className="YonetimCard">
                <img className="YonetimFotograf" src={fotograf}></img>
                <section className="YonetimDetay">
                  <h1>
                    {" "}
                    {Gelenveriler.unvan} {Gelenveriler.Adi}
                  </h1>
                  <p1> {Gelenveriler.Hakkinda} </p1>
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Yonetim;
