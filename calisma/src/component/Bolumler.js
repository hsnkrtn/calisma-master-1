import React from "react";
import { useLocation } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

function Bolumler(props) {
  const fotograflar = HastaneFotograflari[5].a;

  const location = useLocation();
  const Gelenveriler = location.state.Gonderilenveriler;
  const Baslik = Gelenveriler.BolumAdi;
  const Detay = Gelenveriler.Detay;
  const Doktorlar = Gelenveriler.Doktorlar;


  console.log(Doktorlar);

  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <img className="RouterSayfasiFotograf" src={fotograflar}></img>
        <section className="RouterSayfasiDetay">
          <h1>{Baslik}</h1>
          <p1>{Detay} </p1>
        </section>
        <div className="BolumlerDoktorlar">

            





        </div>
      </div>
    </div>
  );
}

export default Bolumler;
