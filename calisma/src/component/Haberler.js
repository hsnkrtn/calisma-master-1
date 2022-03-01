import DataConsumer from "../context";
import { Component } from "react";

class Haberler extends Component {
  static contextType = DataConsumer;
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };
  }

  slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 330;
  };

  slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 330;
  };

  componentDidMount() {
    const slider = document.querySelector(".HaberlerVeEtkinlikler");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  render() {
    return (
      <DataConsumer>
        {(value) => {
          let GosterilecekHaberlerson = value.Haberler;

          return (
            <div className="HVE ">
              <a className=" buyukbaslik"> Haberler & Etkinlikler </a>

              <div className="Slider-container">
                <div className="HLeftButton" onClick={this.slideRight}>
                  <i className="fa fa-angle-left"></i>
                </div>

                <div className="HaberlerVeEtkinlikler" id="slider">
                  {GosterilecekHaberlerson.map(
                    (GosterilecekHaberlerson, index) => {
                      return (
                        <div
                          className="Haber"
                          key={index}
                          id={GosterilecekHaberlerson.HaberId}
                        >
                          <div className="Htarih">
                            {" "}
                            <p>Tarih</p>{" "}
                          </div>
                          <img
                            className="Hfotograf"
                            src={GosterilecekHaberlerson.HaberFotografi}
                          ></img>
                          <h1 className="HBaslik">
                            {GosterilecekHaberlerson.HaberBasligi}
                          </h1>{" "}
                          <p1 className="Hdetay">
                            {GosterilecekHaberlerson.HaberDetayi}
                          </p1>
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="HRightButton" onClick={this.slideLeft}>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          );
        }}
      </DataConsumer>
    );
  }
}

export default Haberler;
