import React, { Component } from "react";
import DataConsumer from "../context";

class GenelTanitim extends Component {
  static contextType = DataConsumer;

  render() {
    return (
      <DataConsumer>
        {(value) => {
          let Veriler = value.GenelTanitimVeriler;
          console.log(Veriler);
          return (
            <div className="GenelTanitim">
              {Veriler.map((Veriler,index)  => {   
                return ( 
                <div className="GenelTanitimIcerik">
                
                  <img   className="Hfotograf" src={Veriler.Fotograf}></img>
                  <h1> {Veriler.Baslik} asdfasdaf</h1>
                  <p1> {Veriler.Detay}</p1>
                </div>
                ); 
             }  )}
            </div>
          ); 
        }}
      </DataConsumer>
    );
  }
}

export default GenelTanitim;
