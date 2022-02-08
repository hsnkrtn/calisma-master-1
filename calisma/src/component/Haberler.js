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

  slideLeft =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
}

 slideRight =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
}

  render() {
    const { ArttirID } = this.context;
    const HaberCount = this.state.count;
    const habersayisi= [1,2,3,4,5,6,7,8,9,10];

    return (
      <DataConsumer>
        {(value) => {
          let GosterilecekHaberler = value.Haberler;

          let GosterilecekHaberlerson = GosterilecekHaberler.reverse();
          console.log(GosterilecekHaberlerson);

          return (
            <div className="HVE ">
            <a className=" buyukbaslik"> Haberler & Etkinlikler </a>

            <div className="HRightButton" onClick={this.slideLeft}>
                <i className="fa fa-angle-right"></i>
              </div>
              <div className="Slider-container"> 
            

            

              <div className="HaberlerVeEtkinlikler"  id="slider">
                {GosterilecekHaberlerson.map(
                  (GosterilecekHaberlerson, index) => {
                    return (
                    <div className="Haber" key={index} id={GosterilecekHaberlerson.HaberId}>
                       <div>
                      <div className="Htarih"> <p >Tarih</p>  </div>

                      <img
                        className="Hfotograf"
                        src={GosterilecekHaberlerson.HaberFotografi}
                      ></img>

                      <a>
                        <h1 className="HBaslik">
                          {GosterilecekHaberlerson.HaberBasligi}
                        </h1>
                      </a>
                      <p1 className="Hdetay">
                        {GosterilecekHaberlerson.HaberDetayi}
                      </p1>
                    </div>
                    </div>        


                    )
        }
                )}
              </div>
              </div>
              <div className="HLeftButton" onClick={this.slideRight} >
                <i className="fa fa-angle-left"></i>
              </div>
            </div>
          );
        }}
      </DataConsumer>
    );
  }
}

export default Haberler;
