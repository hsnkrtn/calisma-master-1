import React, { Component } from "react";
import DataConsumer from "../context";
import Navigasyonbar from "./NavigasyonBar";

class GenelTanıtım extends Component {
  componentDidMount() {  
    
  }
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
  }
  verial = (d) => {
    this.setState({ msg: d });
  };

  render() {
    const { msg } = this.state.msg;
    return (
      <DataConsumer>
        {(value) => {
          const Data = value;

          console.log(this.state.msg);

          return (
            <div className="GenelTanıtım">
              <div className="GenelTanitimIcerik">
                <h1> {this.state.msg} </h1>
                <Navigasyonbar SendIdData={this.verial.bind} />
              </div>
            </div>
          );
        }}
      </DataConsumer>
    );
  }
}
export default GenelTanıtım;
