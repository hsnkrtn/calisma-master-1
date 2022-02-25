import React from "react";
import { useLocation } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

function GenelTanitim(props) {
  const f = HastaneFotograflari[7].a;

  const location = useLocation();
  const Baslik = location.state.Baslik;
  const Detay = location.state.Detay;

  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <img className="RouterSayfasiFotograf" src={f}></img>
          <h1> {Baslik}</h1>
          <p1> {Detay}</p1>
        
        
      </div>
    </div>
  );
}

export default GenelTanitim;
