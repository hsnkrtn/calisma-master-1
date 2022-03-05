import React, { Component ,useEffect  } from "react";
import { useLocation } from "react-router-dom";

function Yonetim(props) {
  const location = useLocation();
  const Gelenveriler = location.state.Gonderilenveriler;
  const Baslik = location.state.Baslik;

useEffect(() => {
  window.scrollTo(0, 0);
});
  return (
    <div className="RouterSayfasi">
      <div className="RouterYonetimSayfasiIcerik">
        <h1>{Baslik}</h1>

        <ul className="YonetimCards">
          {Gelenveriler.map((Gelenveriler, index) => {
            return (
              <li
                class="cardyonetim"
                style={{
                  backgroundImage: `url(${Gelenveriler.Fotograf})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div class="infoyonetim">
                  <h1 class="title">
                    {Gelenveriler.unvan} {Gelenveriler.Adi}{" "}
                  </h1>
                  <div className="titlemetin">
                    <p1 > {Gelenveriler.Hakkinda} </p1>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Yonetim;
