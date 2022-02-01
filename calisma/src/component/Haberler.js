import React from "react";

function Haberler() {
  return (
    <div className="HVEbaslik HVEbg ">
      <a className=" buyukbaslik"> Haberler & Etkinlikler </a>
      <div className="HaberlerVeEtkinlikler">
        <div className="HLeftButton">
          <section className="LeftButtonInner">
            {" "}
            <a>
              <span>
                <i className="fa fa-angle-left"></i>
              </span>
            </a>
          </section>
        </div>

        <div className="Haber">
          <div>
            <img className="Hfotograf" src="bga5.jpg"></img>
            <span className="Htarih">
              <p1> Tarih </p1>
            </span>
          </div>

          <a>
            <h1 className="HBaslik">
              Haber Başlığı burada olacak Haber Başlığı burada olacak Haber
              Başlığı burada olacak
            </h1>
          </a>
          <p1 className="Hdetay">
            {" "}
            haberin detaylari buraya gelecekhaberin detaylari burasdafsdya
            gelecekhaberin detaylari burasdafsdya gelecekhaberin detaylari
            burasdafsdya gelecek
          </p1>
        </div>

        <div className="Haber">
          <img className="Hfotograf" src="bga2.jpg"></img>
          <a>
            <h1 className="HBaslik"> Haber Başlığı burada olacak </h1>
          </a>
          <p1 className="Hdetay">
            {" "}
            haberin detaylari burasdafsdya gelecek haberin detaylari
            burasdafsdya gelecekhaberin detaylari burasdafsdya gelecekhaberin
            detaylari burasdafsdya gelecekhaberin detaylari burasdafsdya gelecek
          </p1>
        </div>

        <div className="Haber">
          <img className="Hfotograf" src="bga1.jpg"></img>
          <a>
            <h1 className="HBaslik"> Haber Başlığı burada olacak </h1>{" "}
          </a>
          <p1 className="Hdetay">
            {" "}
            haberin detaylari burasdafsdya gelecekhaberin detaylari burasdafsdya
            gelecekhaberin detaylari burasdafsdya gelecekhaberin detaylari
            burasdafsdya gelecek
          </p1>
        </div>

        <div className="HRightButton">
          <a>
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Haberler;
