import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataConsumer from "../context";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

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
      KurumsalListesi: [],
      YonetimListesi: [],
      BilgiIslemKoordinatorlugu: [],
      Hemsirelik: [],
      Mudurler: [],
      Baslik: "",
      Fotograf: "",
      Detay: "",
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

  render() {
    const logo = HastaneFotograflari[0].Logo;
    return (
      <DataConsumer>
        {(value) => {
          this.state.TanıtımListesi = value.Tanitim;
          this.state.KurumsalListesi = value.Kurumsal;
          this.state.Mudurler = value.Mudurler;
          this.state.Hemsirelik = value.Hemsirelik;
          this.state.BilgiIslemKoordinatorlugu =
            value.BilgiIslemKoordinatorlugu;
          this.state.BashekimlikKisiListesi = value.BashekimlikKisiler;
          this.state.YonetimListesi = value.Yonetim;
          let DahiliListesi = value.DahiliTıpBilimleri;
          let CerrahiListesi = value.CerrahiTipBilimleri;
          let TemelListesi = value.TemelTipBilimleri;
          let DigerTedaviListesi = value.DigerTedaviUniteleri;

          console.log(this.state.YonetimListesi[0].Kisiler);
          return (
            <nav
              className="NavigasyonBar"
            >
              <div></div>
              <Link className="logolink" to={`/`}>
                <img
                  className="brand"
                  title="Hastane Logo "
                  src={logo}
                  alt="Hastane Logo "
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
                      className={
                        this.state.showTanitimList ? " butonrengi" : null
                      }
                      onMouseEnter={() => {
                        this.setState({ showTanitimList: true });
                      }}
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
                                onMouseEnter={() => {
                                  this.setState({
                                    Baslik:
                                      this.state.TanıtımListesi[index].Baslik,
                                    Detay:
                                      this.state.TanıtımListesi[index].Detay,
                                    Fotograf:
                                      this.state.TanıtımListesi[index].Fotograf,
                                  });
                                }}
                                to={{
                                  pathname: `/GenelTanitim/Tanitim/${TanıtımListesi.id} `,
                                  state: {
                                    Baslik: this.state.Baslik,
                                    Detay: this.state.Detay,
                                  },
                                }}
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
                      className={
                        this.state.showKurumsalList ? " butonrengi" : null
                      }
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
                        {this.state.KurumsalListesi.map(
                          (KurumsalListesi, index) => {
                            return (
                              <Link
                                onMouseEnter={() => {
                                  this.setState({
                                    Baslik:
                                      this.state.KurumsalListesi[index].Baslik,
                                    Detay:
                                      this.state.KurumsalListesi[index].Detay,
                                    Fotograf:
                                      this.state.KurumsalListesi[index]
                                        .Fotograf,
                                  });
                                }}
                                to={{
                                  pathname: `/GenelTanitim/Kurumsal/${KurumsalListesi.id} `,
                                  state: {
                                    Baslik: this.state.Baslik,
                                    Detay: this.state.Detay,
                                  },
                                }}
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
                          }
                        )}
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
                      className={
                        this.state.showYonetimList ? " butonrengi" : null
                      }
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
                        {this.state.YonetimListesi.map(
                          (YonetimListesi, index) => {
                            return (
                              <Link
                                onMouseEnter={() => {
                                  this.setState({
                                    Baslik: YonetimListesi.Baslik,
                                  });
                                }}
                                to={{
                                  pathname: `/Yonetim/${YonetimListesi.id} `,
                                  state: {
                                    Baslik: this.state.Baslik,
                                    Gonderilenveriler:
                                      this.state.YonetimListesi[index].Kisiler,
                                  },
                                }}
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
                          }
                        )}
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
                      className={
                        this.state.showBolumlerList ? " butonrengi" : null
                      }
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
 className= {this.state.showDoktorlarList ? " butonrengi":null}

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
                        this.state.showIletisimItems ? " butonrengi" : null
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
                        title="GoogleHarita"
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
              <Link
                to={{
                  pathname:
                    "https://ftmhbys.mergentech.com.tr/mergenTechSbsHastaPortaliIstemci/giris",
                }}
                target="_blank"
              >
                {" "}
                <button className="RandevuAlButton"> RANDEVU AL </button>{" "}
              </Link>
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
