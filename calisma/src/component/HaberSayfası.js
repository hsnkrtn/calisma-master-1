import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Haberler from "./Haberler";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";
import HaberSlider from "./HaberSlider";
import ResimlerSlider from "./ResimlerSlider";

function HaberSayfasÄ±(props) {
  const location = useLocation();
  const Baslik = location.state.Baslik;
  const Detay = location.state.Detay;
  const HaberFotograf = location.state.Fotograf;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <div className="RouterSayfasiFotograf" >
          {/* <ResimlerSlider Fotograf={HaberFotograf} /> */}
          <img src={ HaberFotograf}  ></img>
        </div>
        <section className="RouterSayfasiDetay">
          <h1> {Baslik}</h1>
          <hr></hr>
          <p1> {Detay}</p1>
          <hr></hr>
        </section>{" "}
        <section className="RouterSayfasiDetay">
          <h1> Diger Haberler</h1>
          <HaberSlider></HaberSlider>{" "}
        </section>
      </div>
    </div>
  );
}

export default HaberSayfasÄ±;
