import React from "react";
import { useLocation } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

function Bolumler(props) {
  const fotograflar = HastaneFotograflari[5].a;

  const location = useLocation();
  const Gonderilenveriler = location.state.Gonderilenveriler;
const Baslik=  Gonderilenveriler.BolumAdi;
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <img className="RouterSayfasiFotograf" src={fotograflar}></img>
        <section  className="RouterSayfasiDetay" > 
          <h1>{Baslik}</h1>
          <hr></hr>
          <p1> </p1>
        </section>
        
      </div>
    </div>
  );
}

export default Bolumler;
