import React, { Component } from "react";
import DataConsumer from "../context";

 class Yonetici extends Component {
  render() {
    return (

      <DataConsumer>
        {(value) => {
          const {Haberler} = value; 
          const Haberlerimiz= Haberler.map((h) => {
  } );

return < div className="  ">  </div>
    }}
      </DataConsumer>
      
    );
  }
  
}
export default Yonetici;
