import React, { Component } from 'react'

const DataContext = React.createContext ();
// provider , consumeer
 export  class ContextProvider  extends Component {


    constructor(props) {
        super(props);
    this.state   = {
    HaberlerSonId:5 ,
  

    Haberler : [
{
    HaberId:1,
HaberFotografi :   " bga1.jpg",
HaberBasligi : "Firat Universitesi Hastanesi1 haberleri burada gösterilecek",
HaberDetayi : " detay1"



},
{
    HaberId:2,
HaberFotografi :   " bga5.jpg",
HaberBasligi : "Firat Universitesi Hastanesi haberleri burada gösterilecekFirat Universitesi Hastanesi2",
HaberDetayi : "detay2"



},
{
    HaberId:3,
HaberFotografi :   " bga2.jpg",
HaberBasligi : " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
HaberDetayi : " detay3"



},
{
    HaberId:4,
HaberFotografi :   " bga2.jpg",
HaberBasligi : " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
HaberDetayi : " detay4 "



},
{
    HaberId:5,
HaberFotografi :   " bga2.jpg",
HaberBasligi : " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
HaberDetayi : " detay5 "



},
{
    HaberId:6,
HaberFotografi :   " bga2.jpg",
HaberBasligi : " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
HaberDetayi : " detay6 "



},
{
    HaberId:7,
HaberFotografi :   " bga9.jpg",
HaberBasligi : " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
HaberDetayi : " detay7 "



},
 ]
};
}
// ArttirID  = ()=> {
//     this.setState({
//         HaberlerSonId:3
//     })
//     console.log ( this.state.HaberlerSonId);
// }

componentDidMount (){
this.state.Haberler.map((IdAlacak,index) =>     
{
    if(IdAlacak.HaberId > this.state.HaberlerSonId){
        this.setState({
            HaberlerSonId:IdAlacak.HaberId
            
        })
console.log (this.state.HaberlerSonId)
    }

}

);

}

render() {

  
console.log(this.state.Haberler[0].HaberId);


        return (
        <DataContext.Provider value={{...this.state, ArttirID:this.ArttirID}}>
            {this.props.children}


          
        </DataContext.Provider>
        
        )
     

    }
}
const DataConsumer= DataContext.Consumer;
export default DataConsumer ;