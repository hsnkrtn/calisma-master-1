import React from "react";
import { useLocation } from "react-router-dom";
import Haberler from "./Haberler";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";
import HaberSlider from "./HaberSlider";

function HaberSayfası(props) {
  const fotograflar = HastaneFotograflari[2].a;

  const location = useLocation();
  const Baslik = location.state.Baslik;
  const Detay = location.state.Detay;

  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <img className="RouterSayfasiFotograf" src={fotograflar}></img>
        <section className="RouterSayfasiDetay">
          <h1> {Baslik}</h1>
           <hr></hr>
          <p1> {Detay}</p1> 
          <hr></hr>
          <section>
            <h1> Diger Haberler</h1>
            <HaberSlider></HaberSlider>{" "}
          </section>{" "}
        </section>
      </div>
    </div>
  );
}

export default HaberSayfası;
