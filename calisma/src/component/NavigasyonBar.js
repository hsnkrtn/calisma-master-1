import React, { Component } from "react";
import { useState } from "react";
import "../App.css";

function Navigasyonbar() {

  const[showNavbar, setshowNavbar]= useState(true );
  const [showLinks, setShowLinks] = useState(false);
  const [showListItems, setshowListItems] = useState(false);
  const [showListItems1, setshowListItems1] = useState(false);
  const [showListItems2, setshowListItems2] = useState(false);
  const [showListItems2_1, setshowListItems2_1] = useState(false);
  const [showListItems2_2, setshowListItems2_2] = useState(false);
  const [showListItems2_3, setshowListItems2_3] = useState(false);
  const [showListItems2_4, setshowListItems2_4] = useState(false);
  const [showListItems3, setshowListItems3] = useState(false);
  const [showListItems5, setshowListItems5] = useState(false);
  


  const Hstyle = {
    color: "black",
    backgroundColor: " white",
  };


  const changeNavbar = ()=> {
 
    if (window.scrollY > 60 ) { setshowNavbar(false)   } 
    else { setshowNavbar(true)}

  }
  window.addEventListener('scroll',changeNavbar);

 
  return (
    <nav className=   {showNavbar ? "NavigasyonBar Shadow   ":" NavigasyonBar  "} >
      <a className="brand">
        <img className="brand1" src="hastanelogo.jpg" height={90} width={90}></img>
          <p1 className=" brand2" > FIRAT ÜNİVERSİTESİ HASTANESİ  </p1>  
      </a>

      <div className="Links" id={showLinks ? "hidden" : ""}>
        <div
          style={showListItems ? Hstyle : {}}
          onMouseLeave={() => setshowListItems(false)}
        >
          <a role="button" onMouseEnter={() => setshowListItems(true)}>
            Tanıtım
          </a>

          <div className="TanitimItems" id={showListItems ? "ListItems" : ""}>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Tarihçe
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Genel Tanıtım
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Kat Planı
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Resimler ve Videolar
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Yemek Listesi
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Yemek Listesi
            </a>
            <div className="GeriButton" id="Geri">
              <a onMouseEnter={() => setshowListItems(false)}>
                <span>
                  <i className="fa fa-angle-double-left"></i>
                </span>
                Geri
              </a>
            </div>
          </div>
        </div>

        <div
          style={showListItems1 ? Hstyle : {}}
          onMouseLeave={() => setshowListItems1(false)}
        >
          <a role="button" onMouseEnter={() => setshowListItems1(true)}>
        
            Kurumsal
          </a>
          <div className="KurumsalItems" id={showListItems1 ? "ListItems" : ""}>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Rektörümüz{" "}
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Misyon Ve Vizyon{" "}
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Değerlerimiz{" "}
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Amaç Ve Hedeflerimiz{" "}
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Kalite Yönetimi{" "}
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Kalite Yönetimi{" "}
            </a>
            <div className="GeriButton" id="Geri">
              <a onMouseEnter={() => setshowListItems1(false)}>
                <span>
                  <i className="fa fa-angle-double-left"></i>
                </span>
                Geri
              </a>
            </div>
          </div>
        </div>
        <div
          style={showListItems2 ? Hstyle : {}}
          onMouseLeave={() => setshowListItems2(false)}
        >
          <a role="button" onMouseEnter={() => setshowListItems2(true)}>
            Bölümler
          </a>
          <div>
            <div
              className="BolumlerItems"
              id={showListItems2 ? "BolumlerListItems" : ""}
            >
              <a
                role="button"
                onClick={() => setshowListItems2_1(!showListItems2_1)}
              >
                Dahili Tıp Bilimleri
              </a>
              {showListItems2 ? (
                <div
                  className="DahiliListesi"
                  id={showListItems2_1 ? "dahili" : ""}
                >
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Acil Tıp Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Adli Tıp Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Aile Hekimliği Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Çocuk Sağlığı ve Hastalıkları Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Çocuk ve Ergen Ruh Sağlığı Hastalıkları ABD{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Dermatoloji Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Enfeksiyon Hastalıkları Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Fiziksel Tıp ve Rehabilitasyon Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Göğüs Hastalıkları Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Halk Sağlığı Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; İç Hastalıkları Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Kardiyoloji Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Nörolojii Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Nükleer Tıp Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Psikiyatri Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Radyasyon Onkolojisi Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Radyodiagnostik Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Tıbbi Genetik Anabilim Dalı{" "}
                  </a>
                  <div className="GeriButtonDahili" id="Geri">
                    <a onMouseEnter={() => setshowListItems2_1(false)}>
                      <span>
                        <i className="fa fa-angle-double-left"></i>
                      </span>
                      Geri
                    </a>
                  </div>
                </div>
              ) : null}

              <a
                role="button"
                onClick={() => setshowListItems2_2(!showListItems2_2)}
              >
                Cerrahi Tıp Bilimleri
              </a>
              {showListItems2 ? (
                <div
                  className="CerrahiListesi"
                  id={showListItems2_2 ? "cerrahi" : ""}
                >
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Anesteziyoloji ve Reanimasyon Anabilim Dalı
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Beyin Cerrahisi Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Çocuk Cerrahisi Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Genel Cerrahi Anabilim Dalı
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Göğüs Cerrahisi Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Göz Hastalıkları Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Kadın Hastalıkları ve Doğum Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Kalp-Damar Cerrahisi Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Kulak Burun Boğaz Hastalıkları Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Ortopedi ve Travmatoloji Anabilim Dalı
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Patoloji Anabilim Dalı
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Plastik ve Rekonstrüktif Cerrahi Anabilim Dalı
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Üroloji Anabilim Dalı
                  </a>

                  <div className="GeriButtonCerrahi" id="Geri">
                    <a onMouseEnter={() => setshowListItems2_2(false)}>
                      <span>
                        <i className="fa fa-angle-double-left"></i>
                      </span>
                      Geri
                    </a>
                  </div>
                </div>
              ) : null}
              <a
                role="button"
                onClick={() => setshowListItems2_3(!showListItems2_3)}
              >
                Temel Tıp Bilimleri
              </a>
              {showListItems2 ? (
                <div
                  className="TemelListesi"
                  id={showListItems2_3 ? "Tlist" : ""}
                >
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Biyokimya Anabilim Dalı
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; İmmünoloji Anabilim Dalı{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Mikrobiyoloji ve Klinik Mikrobiyoloji ABD{" "}
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Parazitoloji Anabilim Dalı
                  </a>
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Tıbbi Biyoloji Anabilim Dalı{" "}
                  </a>
                  <div className="GeriButtonTemel" id="GeriTemel">
                    <a onMouseEnter={() => setshowListItems2_3(false)}>
                      <span>
                        <i className="fa fa-angle-double-left"></i>
                      </span>
                      Geri
                    </a>
                  </div>
                </div>
              ) : null}

              <a
                role="button"
                onClick={() => setshowListItems2_4(!showListItems2_4)}
              >
                Diğer Tedavi Üniteleri
              </a>

              {showListItems2 ? (
                <div
                  className="DigerListesi"
                  id={showListItems2_4 ? "diger" : ""}
                >
                  <a>
                    <span>
                      <i className="fa fa-chevron-right"></i>
                    </span>{" "}
                    &nbsp; Geleneksel ve Tamamlayıcı Tıp Uygulama Merkezi
                  </a>

                  <div className="GeriButtonDiger" >
                    <a onMouseEnter={() => setshowListItems2_4(false)}>
                      <span>
                        <i className="fa fa-angle-double-left"></i>
                      </span>
                      Geri
                    </a>
                  </div>
                </div>
              ) : null}

              {
            
              }
              <div className="GeriButtonBolumler"  id={ showListItems2_1 || showListItems2_2 || showListItems2_3|| showListItems2_4 ?"gerinone": "geributtonflex" } > 
                <a onMouseEnter={() => setshowListItems2(false)}>
                  <span>
                    <i className="fa fa-angle-double-left"></i>
                  </span>
                  Geri
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          style={showListItems3 ? Hstyle : {}}
          onMouseLeave={() => setshowListItems3(false)}
        >
          <a role="button" onMouseEnter={() => setshowListItems3(true)}>
            Yönetim
          </a>
          <div className="YonetimItems" id={showListItems3 ? "ListItems" : ""}>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp; Hastane Başhekimi{" "}
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp; Başhekim Yardımcıları
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Başmüdür
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Müdür ve Müdür Yardımcıları{" "}
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Bilgi İşlem Koordinatörlüğü{" "}
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Hemşirelik Hizmetleri{" "}
            </a>
            <a>
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>{" "}
              &nbsp;Organizasyon Şeması{" "}
            </a>
            <div className="GeriButton" id="Geri">
              <a onMouseEnter={() => setshowListItems3(false)}>
                <span>
                  <i className="fa fa-angle-double-left"></i>
                </span>
                Geri
              </a>
            </div>
          </div>
        </div>

        <a>Doktorlar </a>

        <div
          style={showListItems5 ? Hstyle : {}}
          onMouseLeave={() => setshowListItems5(false)}
        >
          <a role="button" onMouseEnter={() => setshowListItems5(true)}>
           
            İletişim
          </a>
          <div className="IletisimItems" id={showListItems5 ? "Map" : ""}>
            <div className="IletisimItemsIframe">
              <iframe  className="harita"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.6093589334732!2d39.20330651580714!3d38.68084487960478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c0895a19c2a3%3A0x56a2b23e62945af6!2sF%C4%B1rat+%C3%9Cniversitesi+Hastanesi!5e0!3m2!1str!2str!4v1515742266104"
                
              ></iframe>
              <p>
                <h>Adres </h> : Üniversite Mahallesi Yahya Kemal Caddesi No:25
                MERKEZ/ELAZIĞ <br></br>
                <h>Telefon </h>: 0424 233 35 55<br></br>
                <h>E-mail </h>: hastane@firat.edu.tr<br></br>
                <h> Hesap Bilgileri</h>: Fırat Ünv Hastanesi Dön. Sermaye
                İşletme Müdürlüğü TR860001001561135354675057
              </p>
            </div>
        
          </div>
        </div>
      </div>

      <div className="search-box">
        <button className="btn-search ">
          <i className="fa fa-search"></i>
        </button>

        <input
          type="text"
          className="input-search"
          placeholder="Arama Yap"
        ></input>
      </div>

      <button className="RandevuAlButton">
        
        <a> RANDEVU AL </a>
      </button>

      <button className="MenüButton" onClick={() => setShowLinks(!showLinks)}>
        <i className="fa fa-bars "></i>
      </button>
    </nav>
  );
}
export default Navigasyonbar;
