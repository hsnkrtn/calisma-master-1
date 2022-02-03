import DataConsumer from "../context";
import { Component } from "react";




class Haberler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  };

  render() {
    const HaberCount= this.state.count;
    const num = [1,2,3] ; 
    return (
      <DataConsumer>
        {(value) => {
           const hasHaber  = value;



    // console.log (hasHaber.Haberler[0].HaberBasligi);

  
         
          return  <div className="HVEbaslik HVEbg ">
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
                
              {
               num.map((ghs) =>  
             
               <div className="Haber" id={hasHaber.Haberler[HaberCount].HaberId}>
                  <div>
                    <img className="Hfotograf" src={hasHaber.Haberler[HaberCount].HaberFotografi}></img>
                    <span className="Htarih">
                      <p1> Tarih </p1>
                    </span>
                  </div>

                  <a>
                    <h1 className="HBaslik">
                    {hasHaber.Haberler[HaberCount].HaberBasligi}
                    </h1>
                  </a>
                  <p1 className="Hdetay">
                  {hasHaber.Haberler[HaberCount].HaberDetayi}
                  </p1>
                </div>
     
                )
              
                }
              

         
             

                <div className="HRightButton">
                  <a>
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
        }
        }
      </DataConsumer>
    );
  }
}

export default Haberler;
