import React from "react";

function Haberler() {
  return (

    <div className="HVEbaslik "> <a className=" buyukbaslik"> Haberler & Etkinlikler </a> 
    <div className="HaberlerVeEtkinlikler">




 
       <div className="Haber">
         <div > <img className="Hfotograf" src="hastane2.jpg" height={90}></img>
         <span className="Htarih"> <p1> Tarih </p1> </span>
         </div>
        
        <a><h1 className="HBaslik"> Haber Başlığı burada olacak    Haber Başlığı burada olacak Haber Başlığı burada olacak </h1></a> 
        <p1 className="Hdetay"> haberin detaylari buraya gelecek</p1>
      </div> 
      
      <div className="Haber">
        <img className="Hfotograf" src="hastane2.jpg" height={90}></img>
        <a>  <h1 className="HBaslik"> Haber Başlığı burada olacak </h1> </a>
        <p1 className="Hdetay"> haberin detaylari burasdafsdya gelecek</p1>
      </div>  
      
      <div className="Haber">
        <img className="Hfotograf" src="hastane2.jpg" height={90}></img>
        <a>  <h1 className="HBaslik"> Haber Başlığı burada olacak </h1> </a>
        <p1 className="Hdetay"> haberin detaylari burasdafsdya gelecek</p1>
      </div>  
    </div>
    </div>
  );
}

export default Haberler;
