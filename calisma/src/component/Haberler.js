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


    return (
      <DataConsumer>
        {(value) => {
           let hasHaber  = value.Haberler;
        let GostelrilecekHaberler = hasHaber.filter(  hbr=> hbr.HaberId >2 );
        console.log ( hasHaber) ;
        console.log ( GostelrilecekHaberler) ;
         
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
                
         {/* { hasHaber.Haberler.map((GostelrilecekHaberler) => ( */}
         {  GostelrilecekHaberler.map (( GostelrilecekHaberler )  => 
               <div className="Haber" id= {GostelrilecekHaberler.HaberId}
               >
                  <div>
                    <img className="Hfotograf" src={GostelrilecekHaberler.HaberFotografi}></img>
                    <span className="Htarih">
                      <p1> Tarih </p1>
                    </span>
                  </div>

                  <a>
                    <h1 className="HBaslik">
                    {/* {hasHaber.Haberler[HaberCount].HaberBasligi} */}
                    {GostelrilecekHaberler.HaberBasligi}
                    </h1>
                  </a>
                  <p1 className="Hdetay">
                  {GostelrilecekHaberler.HaberDetayi}
                  </p1>
                </div>
                )
        }
         {/* )) } */}
        
       
              
              
       
              
              

         
             

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
