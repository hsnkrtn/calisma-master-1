import React from "react";
import { useLocation } from "react-router-dom"

function GenelTanitim(props) {
  const location = useLocation()
const Baslik = location.state.Baslik;
const Detay = location.state.Detay;


    return (
    <div className="GenelTanitim">
      <div className="GenelTanitimIcerik">
        <h1> {Baslik}</h1>
        <p1> {Detay}</p1>
      </div>
    </div>
  );
}



export default GenelTanitim;
