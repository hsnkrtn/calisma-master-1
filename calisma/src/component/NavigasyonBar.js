import React, { Component } from "react";
import "../App.css";
import DataConsumer from "../context";

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
      showListItems2_1: false,
      showListItems2_2: false,
      showListItems2_3: false,
      showListItems2_4: false,
      showListItems3: false,
      showListItems5: false,
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
    return (
      <DataConsumer>
        {(value) => {
          let TanıtımListesi = value.tanitim;
          let KurumsalListesi = value.Kurumsal;
          let YonetimListesi = value.Yonetim;
          console.log(TanıtımListesi);
          return (
            <nav
              className={
                this.state.showNavbar ? " Shadow   " : " NavigasyonBar  "
              }
            >
              <img
                className={this.state.showNavbar ? "brand1" : "brand"}
                src=" hastanelogo.png"
              ></img>

              <div className="Links" id={this.state.showLinks ? "hidden" : ""}>
                <ul className="LinksList">
                  <div
                    onMouseLeave={() => {
                      this.setState({ showTanitimList: false });
                    }}
                  >
                    <li
                      className={
                        this.state.showTanitimList ? "ButtonColor" : null
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
                        {TanıtımListesi.map((TanıtımListesi, index) => {
                          return (
                            <li>
                              &nbsp;
                              <span>
                                <i className="fa fa-chevron-right"></i>
                              </span>
                              &nbsp;
                              {TanıtımListesi.TanitimBaslik}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div
                    onMouseLeave={() => {
                      this.setState({ showKurumsalList: false });
                    }}
                  >
                    <li
                      className={
                        this.state.showKurumsalList ? "ButtonColor" : null
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
                        {KurumsalListesi.map((KurumsalListesi, index) => {
                          return (
                            <li>
                              &nbsp;
                              <span>
                                <i className="fa fa-chevron-right"></i>
                              </span>
                              &nbsp;
                              {KurumsalListesi.KurumsalBaslik}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div
                    onMouseLeave={() => {
                      this.setState({ showYonetimList: false });
                    }}
                  >
                    <li
                      className={
                        this.state.showYonetimList ? "ButtonColor" : null
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
                        {YonetimListesi.map((YonetimListesi, index) => {
                          return (
                            <li>
                              &nbsp;
                              <span>
                                <i className="fa fa-chevron-right"></i>
                              </span>
                              &nbsp;
                              {YonetimListesi.YonetimBaslik}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <li>Bölümler</li>
                  <li>Doktorlar</li>
                  <li>İletişim</li>
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
