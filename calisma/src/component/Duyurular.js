import React, { Component } from "react";
import { bga }   from "./Helpers/AttachmentData";
import { useState,useEffect  } from "react";

import "../App.css"; 


function Duyurular() {
const [bgaNumber, setbgaNumber]= useState(1);


  return (
    <div className=" DuyurularAlani bga  " 
    style={{backgroundImage: `url(${bga[bgaNumber].a})`} }  >
   <div className="bga "> </div>

      <a className=" DuyuruBuyukBaslik"> Duyurular </a>

      <div className="duyurular">
        <div className="Duyuru">
          <div className="DuyuruIcon">
            <i class="fa  fa-envelope"></i>
          </div>
          <div className="DuyuruIcerik">
            <h1 className="DuyuruBaslik">
          
              Duyuru Başlığı burada olacak Duyuru Başlığı burada olacak Duyuru
              Başlığı burada olacak Duyuru Başlığı burada olacak Duyuru Başlığı
              burada olacak Duyuru Başlığı burada olacak
            </h1>
            <div className="Dtarih">
         
              <p> Tarih </p>
            </div>
          </div>
        </div>
        <div className="Duyuru">
          <div className="DuyuruIcon">
            <i class="fa  fa-envelope"></i>
          </div>
          <div className="DuyuruIcerik">
            <h1 className="DuyuruBaslik">
          
              Duyuru Başlığı burada olacak Duyuru Başlığı burada olacak Duyuru
              Başlığı burada olacak Duyuru Başlığı burada olacak Duyuru Başlığı
              burada olacak Duyuru Başlığı burada olacak
            </h1>
            <div className="Dtarih">
         
              <p> Tarih </p>
            </div>
          </div>
        </div>
        <div className="Duyuru">
          <div className="DuyuruIcon">
            <i class="fa  fa-envelope"></i>
          </div>
          <div className="DuyuruIcerik">
            <h1 className="DuyuruBaslik">
          
              Duyuru Başlığı burada olacak Duyuru Başlığı burada olacak Duyuru
              Başlığı burada olacak Duyuru Başlığı burada olacak Duyuru Başlığı
              burada olacak Duyuru Başlığı burada olacak
            </h1>
            <div className="Dtarih">
         
              <p> Tarih </p>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default Duyurular;
