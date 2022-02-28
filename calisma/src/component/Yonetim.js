import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

function Yonetim(props) {
  const location = useLocation();
  const Gelenveriler = location.state.BashekimlikKisiListesi;
  const fotograf = HastaneFotograflari[2].a;

  return (
    <div className="RouterSayfasi">
      <div
        className="RouterYonetimSayfasiIcerik
"
      >
        <ul className="YonetimCards">
          {Gelenveriler.map((Gelenveriler, index) => {
            return (
              <li className="YonetimCard">
                <img className="YonetimFotograf" src={fotograf}></img>
                <section className="YonetimDetay">
                  <h1> Hasan</h1>
                  <p1> 1976 yılında Elazığ’ da doğdu. İlk, orta ve lise eğitimini Elazığ’ da tamamladı.2000 yılında Fırat Üniversitesi Tıp Fakültesinden mezun oldu.2000-2002 Van Askeri Hastanesinde Yedek Subay olarak görev yaptı.2002-2008 yılları arasında Fırat Üniversitesi Üroloji Anabilim Dalında uzmanlık eğitimini tamamladı. 2008-2009 yılları arasında Diyarbakır Bismil Devlet Hastanesinde mecburi hizmetini tamamladı.2009 yılında Fırat Üniversitesi Üroloji Anabilim Dalına Yardımcı Doçent olarak atandı. 2014 yılında Doçent unvanını, 2019 yılında ise Profesör unvanını aldı. 2015 yılından itibaren Fırat Üniversitesi Hastanesi Başhekim Yardımcısı olarak görevlendirildi. 2020 yılı içerisinde Fırat Üniversitesi Tıp Fakültesi Dekan Yardımcısı olarak görev yaptı. Ulusal ve uluslararası makale ve bildirileri bulunmakta olup evli ve iki çocuk babasıdır. </p1>
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
