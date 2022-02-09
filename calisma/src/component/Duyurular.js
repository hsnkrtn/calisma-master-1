import React, { Component } from "react";
import { bga } from "./Helpers/AttachmentData";
import DataConsumer from "../context";

import "../App.css";

class Duyurular extends Component {
  static contextType = DataConsumer;
  constructor(props) {
    super(props);
    this.state = {
      bgaNumber: 0,
    };
  }
  componentDidMount() {
    if (this.state.bgaNumber == 0) {
      setTimeout(() => {
        this.setState({
          bgaNumber: this.state.bgaNumber + 1,
        });
      }, 10000);
    } else {
      setTimeout(() => {
        this.setState({
          bgaNumber: this.state.bgaNumber + 1,
        });
      }, 10000);
    }
  }

  render() {
    return (
      <DataConsumer>
        {(value) => {
          let ButunDuyurular = value.Duyurular;
          console.log(Duyurular);
          let GosterilecekDuyurular = ButunDuyurular.reverse();
          console.log(GosterilecekDuyurular);
          return (
            <div
              className=" bga "
              style={{ backgroundImage: `url(${bga[this.state.bgaNumber].a})` }}
            >
              <a className=" DuyuruBuyukBaslik"> Duyurular </a>

              <div className="bga "></div>
              <div className="Duyuruslider">
                <div className="duyurular">
                  {GosterilecekDuyurular.map((GosterilecekDuyurular, index) => {
                    return (
                      <div
                        className="Duyuru"
                        key={index}
                        id={GosterilecekDuyurular.DuyuruId}
                      >
                        <div className="DuyuruIcon">
                          <i class="fa  fa-envelope"></i>
                        </div>
                        <div className="DuyuruIcerik">
                          <h1 className="DuyuruBaslik">
                            {GosterilecekDuyurular.DuyuruBaslik}
                          </h1>
                          <div className="Dtarih">
                            <p> {GosterilecekDuyurular.Dtarih} </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }}
      </DataConsumer>
    );
  }
}

export default Duyurular;
