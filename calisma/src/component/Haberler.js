import DataConsumer from "../context";
import { Component } from "react";

class Haberler extends Component {
  static contextType = DataConsumer;
  constructor(props) {
    super(props);
    this.arttirHaberId = this.arttirHaberId.bind(this);
    this.state = {
      count: 5,
    };
  }

  arttirHaberId(e) {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { ArttirID } = this.context;
    const HaberCount = this.state.count;

    return (
      <DataConsumer>
        {(value) => {
          let ghabersayisi = value.ghabersayisi;

          let GosterilecekHaberler = value.Haberler.filter(
            (hbr,index) => index >= ghabersayisi
          );

          let GosterilecekHaberlerson = GosterilecekHaberler.reverse();
          console.log(GosterilecekHaberlerson);

          return (
            <div className="HVEbaslik HVEbg ">
              <a className=" buyukbaslik"> Haberler & Etkinlikler </a>
              <div className="HaberlerVeEtkinlikler">
                <div className="HLeftButton">
                  <section className="LeftButtonInner">
                    <a>
                      <span>
                        <i className="fa fa-angle-left"></i>
                      </span>
                    </a>
                  </section>
                </div>

                {/* { hasHaber.Haberler.map((GostelrilecekHaberler) => ( */}
                {GosterilecekHaberlerson.map((GosterilecekHaberlerson) => (
                  <div className="Haber" id={GosterilecekHaberlerson.HaberId}>
                    <div>
                      <img
                        className="Hfotograf"
                        src={GosterilecekHaberlerson.HaberFotografi}
                      ></img>
                      <span className="Htarih">
                        <p1> Tarih </p1>
                      </span>
                    </div>

                    <a>
                      <h1 className="HBaslik">
                        {GosterilecekHaberlerson.HaberBasligi}
                      </h1>
                    </a>
                    <p1 className="Hdetay">
                      {GosterilecekHaberlerson.HaberDetayi}
                    </p1>
                  </div>
                ))}

                <div className="HRightButton" onClick={ArttirID}>
                  <a>
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
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
