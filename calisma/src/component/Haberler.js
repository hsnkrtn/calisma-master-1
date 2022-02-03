import DataConsumer from "../context";
import { Component } from "react";





class Haberler extends Component {
  constructor(props) {
    super(props);
    this.arttirHaberId = this.arttirHaberId.bind(this);
    this.state = {
      count: 0
    };
  }

 arttirHaberId (e){
this.setState({
    count : this.state.count+1
  }
); }

  render() {
    const HaberCount= this.state.count;
    const num = [1,2,3] ; 


    return (
      <DataConsumer>
        {(value) => {
           const hasHaber  = value;



     console.log (hasHaber.HaberlerSonId);

  
         
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
                
         { hasHaber.Haberler.map((GöstelrilecekHaberler) => (
            
               <div className="Haber" id= {GöstelrilecekHaberler.HaberId}
               >
                  <div>
                    <img className="Hfotograf" src={GöstelrilecekHaberler.HaberFotografi}></img>
                    <span className="Htarih">
                      <p1> Tarih </p1>
                    </span>
                  </div>

                  <a>
                    <h1 className="HBaslik">
                    {/* {hasHaber.Haberler[HaberCount].HaberBasligi} */}
                    {GöstelrilecekHaberler.HaberBasligi}
                    </h1>
                  </a>
                  <p1 className="Hdetay">
                  {GöstelrilecekHaberler.HaberDetayi}
                  </p1>
                </div>
         ))
                }
        
       
              
              
       
              
              

         
             

                <div className="HRightButton" onClick={ this.arttirHaberId } >
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
