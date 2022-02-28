import React from "react";
import { useLocation } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

function GenelTanitim(props) {
  const fotograflar = HastaneFotograflari[5].a;

  const location = useLocation();
  const Baslik = location.state.Baslik;
  const Detay = location.state.Detay;
console.log(Detay)
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <img className="RouterSayfasiFotograf" src={fotograflar}></img>
        <section  className="RouterSayfasiDetay" > 
          <h1> {Baslik}</h1>
          <hr></hr>
          <p1> {Detay}</p1>
        </section>
        
      </div>
    </div>
  );
}

export default GenelTanitim;
