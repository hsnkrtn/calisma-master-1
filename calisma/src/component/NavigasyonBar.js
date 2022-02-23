import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataConsumer from "../context";
import GenelTanitim from "./GenelTanitim";

class Navigasyonbar extends Component {
  static contextType = DataConsumer;
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      showLinks: false,
      showTanitimList: false,
      showKurumsalList: false,
      showYonetimList: false,
      showBolumlerList: false,
      showDahiliList: false,
      showCerrahiList: false,
      showTemelList: false,
      showDigerTedavilist: false,
      showDoktorlarList: false,
      showIletisimItems: false,
      TanıtımListesi: [],

      GonderilenVeriler: [
        {
          Baslik: "d",
          Fotograf: "a",
          Detay: "a",
        },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbar);
  }

  changeNavbar = () => {
    if (window.scrollY > 100) {
      this.setState({ showNavbar: false });
    } else if (window.scrollY < 100) {
      this.setState({ showNavbar: true });
    }
  };
  VerileriGonder = (e) => {
const  { Baslik,Fotograf,Detay}=this.state.GonderilenVeriler[0];

const GenelTanitimVerileri = {
Baslik,
Fotograf,
Detay,

}


console.log(GenelTanitimVerileri);
  };

  render() {
    return (
      <DataConsumer>
        {(value) => {
          this.state.TanıtımListesi = value.Tanitim;
          let KurumsalListesi = value.Kurumsal;
          let YonetimListesi = value.Yonetim;
          let DahiliListesi = value.DahiliTıpBilimleri;
          let CerrahiListesi = value.CerrahiTipBilimleri;
          let TemelListesi = value.TemelTipBilimleri;
          let DigerTedaviListesi = value.DigerTedaviUniteleri;
          return (
            <nav
              className={
                this.state.showNavbar ? " Shadow   " : " NavigasyonBar  "
              }
            >
              <Link className="logolink" to={`/`}>
                <img
                  className={this.state.showNavbar ? "brand1" : "brand"}
                  src=" hastanelogo.png"
                ></img>
              </Link>{" "}
              <div className="Links" id={this.state.showLinks ? "hidden" : ""}>
                <ul className="LinksList">
                  <div
                    onMouseLeave={() => {
                      this.setState({ showTanitimList: false });
                    }}
                  >
                    <li
                      className="btn-13 "
                      onMouseEnter={() => {
                        this.setState({ showTanitimList: true });
                      }}
                      c
                    >
                      Tanıtım
                    </li>

                    <div
                      className={
                        this.state.showTanitimList ? "Listeler" : "ListeyiGizle"
                      }
                    >
                      <ul>
                        {this.state.TanıtımListesi.map(
                          (TanıtımListesi, index) => {
                            return (
                              <Link
                                onClick={() => { this.VerileriGonder()
                                  this.setState({
                                    Baslik  : this.state.TanıtımListesi.Baslik
                                  });
                                 
                                }
                                
                              
                              }
                                to={`/GenelTanitim/${TanıtımListesi.id}`}
                              >
                                <li>
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {TanıtımListesi.Baslik}
                                </li>
                              </Link>
                            );
                          }
                        )}
                      </ul>

                      <button
                        className="GeriButton"
                        onMouseEnter={() =>
                          this.setState({ showTanitimList: false })
                        }
                      >
                        <span>
                          <i class="fa fa-reply"></i>
                        </span>{" "}
                        &nbsp; Geri
                      </button>
                    </div>
                  </div>

                  <div
                    onMouseLeave={() => {
                      this.setState({ showKurumsalList: false });
                    }}
                  >
                  
                      <li
                        className="btn-13 "
                        onMouseEnter={() => {
                          this.setState({ showKurumsalList: true });
                        }}
                      >
                        Kurumsal
                      </li>
                  
                    <div
                      className={
                        this.state.showKurumsalList
                          ? "Listeler"
                          : "ListeyiGizle"
                      }
                    >
                      <ul>
                        {KurumsalListesi.map((KurumsalListesi, index) => {
                          return (
                            <Link
                            onClick={() => {
                              this.setState({
                                GonderilenVeriler: this.state.KurumsalListesi,
                              });
                            }}
                            to={`/GenelTanitim/${KurumsalListesi.id}`}
                          >
                            <li>
                              &nbsp;
                              <span>
                                <i className="fa fa-chevron-right"></i>
                              </span>
                              &nbsp;
                              {KurumsalListesi.Baslik}
                            </li>
                            </Link>
                          );
                        })}
                      </ul>

                      <button
                        className="GeriButton"
                        onMouseEnter={() =>
                          this.setState({ showKurumsalList: false })
                        }
                      >
                        <span>
                          <i class="fa fa-reply"></i>
                        </span>{" "}
                        &nbsp; Geri
                      </button>
                    </div>
                  </div>

                  <div
                    onMouseLeave={() => {
                      this.setState({ showYonetimList: false });
                    }}
                  >
                    <li
                      className="btn-13 "
                      onMouseEnter={() => {
                        this.setState({ showYonetimList: true });
                      }}
                    >
                      Yönetim
                    </li>

                    <div
                      className={
                        this.state.showYonetimList ? "Listeler" : "ListeyiGizle"
                      }
                    >
                      <ul>
                        {YonetimListesi.map((YonetimListesi, index) => {
                          return (
                            <Link
                            onClick={() => {
                              this.setState({
                                GonderilenVeriler: this.state.YonetimListesi,
                              });
                            }}
                            to={`/GenelTanitim/${YonetimListesi.id}`}
                          >
                            <li>
                              &nbsp;
                              <span>
                                <i className="fa fa-chevron-right"></i>
                              </span>
                              &nbsp;
                              {YonetimListesi.Baslik}
                            </li>
                            </Link>
                          );
                        })}
                      </ul>

                      <button
                        className="GeriButton"
                        onMouseEnter={() =>
                          this.setState({ showYonetimList: false })
                        }
                      >
                        <span>
                          <i class="fa fa-reply"></i>
                        </span>{" "}
                        &nbsp; Geri
                      </button>
                    </div>
                  </div>

                  <div
                    onMouseLeave={() => {
                      this.setState({ showBolumlerList: false });
                    }}
                  >
                    <li
                      className="btn-13 "
                      onMouseEnter={() => {
                        this.setState({ showBolumlerList: true });
                      }}
                    >
                      Bölümler
                    </li>

                    <div
                      className={
                        this.state.showBolumlerList
                          ? "Listeler"
                          : "ListeyiGizle"
                      }
                    >
                      <div className="Bolumler">
                        <div>
                          <h1
                            className="DahiliButton"
                            role="Button"
                            onMouseEnter={() =>
                              this.setState({ showDahiliList: true })
                            }
                          >
                            {" "}
                            DAHİLİ TIP BİLİMLERİ{" "}
                          </h1>
                          <ul
                            className={
                              this.state.showBolumlerList
                                ? "DahiliListesi"
                                : "ListeyiGizle"
                            }
                            id={
                              this.state.showDahiliList
                                ? "Bolumlistelerinigoster"
                                : null
                            }
                          >
                            {DahiliListesi.map((DahiliListesi, index) => {
                              return (
                                <li>
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {DahiliListesi.Baslik}
                                </li>
                              );
                            })}{" "}
                            <button
                              className="GeriButton"
                              onMouseEnter={() =>
                                this.setState({ showDahiliList: false })
                              }
                            >
                              <span>
                                <i class="fa fa-reply"></i>
                              </span>{" "}
                              &nbsp; Geri
                            </button>
                          </ul>
                        </div>

                        <div>
                          {" "}
                          <h1
                            className="CerrahiButton"
                            role="Button"
                            onMouseEnter={() =>
                              this.setState({ showCerrahiList: true })
                            }
                          >
                            CERRAHİ TIP BİLİMLERİ
                          </h1>
                          <ul
                            className={
                              this.state.showBolumlerList
                                ? "CerrahiListesi"
                                : "ListeyiGizle"
                            }
                            id={
                              this.state.showCerrahiList
                                ? "Bolumlistelerinigoster"
                                : null
                            }
                          >
                            {CerrahiListesi.map((CerrahiListesi, index) => {
                              return (
                                <li>
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {CerrahiListesi.Baslik}
                                </li>
                              );
                            })}{" "}
                            <button
                              className="GeriButton"
                              onMouseEnter={() =>
                                this.setState({ showCerrahiList: false })
                              }
                            >
                              <span>
                                <i class="fa fa-reply"></i>
                              </span>{" "}
                              &nbsp; Geri
                            </button>
                          </ul>
                        </div>

                        <div>
                          {" "}
                          <h1
                            className="TemelButton"
                            role="Button"
                            onMouseEnter={() =>
                              this.setState({ showTemelList: true })
                            }
                          >
                            {" "}
                            TEMEL TIP BİLİMLERİ{" "}
                          </h1>
                          <ul
                            className={
                              this.state.showBolumlerList
                                ? "TemelListesi"
                                : "ListeyiGizle"
                            }
                            id={
                              this.state.showTemelList
                                ? "Bolumlistelerinigoster"
                                : null
                            }
                          >
                            {TemelListesi.map((TemelListesi, index) => {
                              return (
                                <li>
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {TemelListesi.Baslik}
                                </li>
                              );
                            })}
                            <button
                              className="GeriButton"
                              onMouseEnter={() =>
                                this.setState({ showTemelList: false })
                              }
                            >
                              <span>
                                <i class="fa fa-reply"></i>
                              </span>{" "}
                              &nbsp; Geri
                            </button>
                          </ul>
                        </div>

                        <div>
                          <h1
                            className="DigerButton"
                            role="Button"
                            onMouseEnter={() =>
                              this.setState({ showDigerTedavilist: true })
                            }
                          >
                            {" "}
                            DİĞER TEDAVİ ÜNİTELERİ{" "}
                          </h1>
                          <ul
                            className={
                              this.state.showBolumlerList
                                ? "DigerTedaviListesi"
                                : "ListeyiGizle"
                            }
                            id={
                              this.state.showDigerTedavilist
                                ? "Bolumlistelerinigoster"
                                : null
                            }
                          >
                            {DigerTedaviListesi.map(
                              (DigerTedaviListesi, index) => {
                                return (
                                  <li>
                                    &nbsp;
                                    <span>
                                      <i className="fa fa-chevron-right"></i>
                                    </span>
                                    &nbsp;
                                    {DigerTedaviListesi.Baslik}
                                  </li>
                                );
                              }
                            )}{" "}
                            <button
                              className="GeriButton"
                              onMouseEnter={() =>
                                this.setState({ showDigerTedavilist: false })
                              }
                            >
                              <span>
                                <i class="fa fa-reply"></i>
                              </span>{" "}
                              &nbsp; Geri
                            </button>
                          </ul>
                        </div>
                      </div>
                      <button
                        className="GeriButtonBolumler"
                        onMouseEnter={() =>
                          this.setState({ showBolumlerList: false })
                        }
                      >
                        <span>
                          <i class="fa fa-reply"></i>
                        </span>{" "}
                        &nbsp; Geri
                      </button>
                    </div>
                  </div>

                  {/* 
                  <div
                    onMouseLeave={() => {
                      this.setState({ showDoktorlarList: false });
                    }}
                  >
                    <li
                      className={
                        this.state.showDoktorlarList ? "ButtonColor" : null
                      }
                      onMouseEnter={() => {
                        this.setState({ showDoktorlarList: true });
                      }}
                    >
                      Doktorlar
                    </li>

                    <div
                      className={
                        this.state.showDoktorlarList
                          ? "Listeler"
                          : "ListeyiGizle"
                      }
                    >
                      <div className="Bolumler">
                        <div
                          className={
                            this.state.showDoktorlarList
                              ? "DahiliListesi"
                              : "ListeyiGizle"
                          }
                        >
                          <ul>
                            <h1 role="Button"> DAHİLİ TIP BİLİMLERİ </h1>
                            {DahiliListesi.map((DahiliListesi, index) => {
                              return (
                                <li>
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {DahiliListesi.DahiliBaslik}
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div
                          className={
                            this.state.showDoktorlarList
                              ? "CerrahiListesi"
                              : "ListeyiGizle"
                          }
                        >
                          <ul>
                            <h1 role="Button"> CERRAHİ TIP BİLİMLERİ</h1>
                            {CerrahiListesi.map((CerrahiListesi, index) => {
                              return (
                                <li>
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {CerrahiListesi.CerrahiBaslik}
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div
                          className={
                            this.state.showDoktorlarList
                              ? "CerrahiListesi"
                              : "ListeyiGizle"
                          }
                        >
                          <ul>
                            <h1 role="Button"> CERRAHİ TIP BİLİMLERİ</h1>
                            {CerrahiListesi.map((CerrahiListesi, index) => {
                              return (
                                <li>
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {CerrahiListesi.CerrahiBaslik}
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div
                          className={
                            this.state.showDoktorlarList
                              ? "TemelListesi"
                              : "ListeyiGizle"
                          }
                        >
                          <ul>
                            <h1 role="Button"> TEMEL TIP BİLİMLERİ </h1>
                            {TemelListesi.map((TemelListesi, index) => {
                              return (
                                <li>
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {TemelListesi.TemelBaslik}
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div
                          className={
                            this.state.showDoktorlarList
                              ? "DigerTedaviListesi"
                              : "ListeyiGizle"
                          }
                        >
                          <ul>
                            <h1 role="Button"> DİĞER TEDAVİ ÜNİTELERİ </h1>
                            {DigerTedaviListesi.map(
                              (DigerTedaviListesi, index) => {
                                return (
                                  <li>
                                    &nbsp;
                                    <span>
                                      <i className="fa fa-chevron-right"></i>
                                    </span>
                                    &nbsp;
                                    {DigerTedaviListesi.DigerTedaviBaslik}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <li className="btn-13 ">Doktorlar</li>
                  <div
                    onMouseLeave={() => {
                      this.setState({ showIletisimItems: false });
                    }}
                  >
                    <li
                      className={
                        this.state.showIletisimItems
                          ? "btn-13 ButtonColor"
                          : null
                      }
                      onMouseEnter={() => {
                        this.setState({ showIletisimItems: true });
                      }}
                    >
                      İletişim
                    </li>

                    <div
                      className={
                        this.state.showIletisimItems
                          ? "IletisimItemsIframe"
                          : "ListeyiGizle"
                      }
                    >
                      <iframe
                        className="harita"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.6093589334732!2d39.20330651580714!3d38.68084487960478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c0895a19c2a3%3A0x56a2b23e62945af6!2sF%C4%B1rat+%C3%9Cniversitesi+Hastanesi!5e0!3m2!1str!2str!4v1515742266104"
                      >
                        {" "}
                      </iframe>
                      <div className="HastaneIletisim">
                        <h>Adres </h> : Üniversite Mahallesi Yahya Kemal Caddesi
                        No:25 MERKEZ/ELAZIĞ <br></br>
                        <h>Telefon </h>: 0424 233 35 55<br></br>
                        <h>E-mail </h>: hastane@firat.edu.tr<br></br>
                        <h> Hesap Bilgileri</h>: Fırat Üniversitesi Hastanesi
                        Döner Sermaye İşletme Müdürlüğü
                        TR860001001561135354675057
                        <button
                          className="GeriButtonBolumler"
                          onMouseEnter={() =>
                            this.setState({ showIletisimItems: false })
                          }
                        >
                          <span>
                            <i class="fa fa-reply"></i>
                          </span>{" "}
                          &nbsp; Geri
                        </button>
                      </div>
                    </div>
                  </div>
                </ul>
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
              <button
                className="MenüButton"
                onClick={() =>
                  this.setState({ showLinks: !this.state.showLinks })
                }
              >
                <i className="fa fa-bars "></i>
              </button>
            </nav>
          );
        }}
      </DataConsumer>
    );
  }
}

export default Navigasyonbar;
