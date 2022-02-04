import DataConsumer from "../context";
import { Component } from "react";



class Haberler extends Component {
static contextType = DataConsumer;
  constructor(props) {
    super(props);
    this.arttirHaberId = this.arttirHaberId.bind(this);
    this.state = {
      count: 5
    };
  }

 arttirHaberId (e){
this.setState({
    count : this.state.count+1

  }

);

}

  render() {
    const { ArttirID}=this.context;
    const HaberCount= this.state.count;


    return (
      <DataConsumer>
        {(value) => {


//  context api içindeki enbüyükId değerini alıyor
          let ebID= value.HaberlerSonId;
 //  context apiçindeki bütün haberleri alıyor 

           let hasHaber  = value.Haberler;
  // context api içindeki haberleri Id si ebID değerinden daha büyük olanları alıyor         
        let gelenhaberler = hasHaber.filter(  hbr=> hbr.HaberId >=ebID );
// gelen haberleri tersten sıralıyor
     let   GostelrilecekHaberler= gelenhaberler.reverse();
console.log ( ebID );

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
                    {GostelrilecekHaberler.HaberBasligi}
                    </h1>
                  </a>
                  <p1 className="Hdetay">
                  {GostelrilecekHaberler.HaberDetayi}
                  </p1>
                </div>
                )
        }
        
       
              
              
       
              
              

         
             

                <div className="HRightButton" onClick={ ArttirID } >
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
