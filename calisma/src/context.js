import React, { Component } from 'react'

const DataContext = React.createContext ();
// provider , consumeer
 export  class ContextProvider  extends Component {
    

    
state   = {
    HaberlerSonId:0 ,
   

    Haberler : [
{
    HaberId:1,
HaberFotografi :   " bga1.jpg",
HaberBasligi : "Firat Universitesi Hastanesi1 haberleri burada gösterilecek",
HaberDetayi : " detay0"



},
{
    HaberId:2,
HaberFotografi :   " bga5.jpg",
HaberBasligi : "Firat Universitesi Hastanesi haberleri burada gösterilecekFirat Universitesi Hastanesi2",
HaberDetayi : "detay1"



},
{
    HaberId:3,
HaberFotografi :   " bga2.jpg",
HaberBasligi : " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
HaberDetayi : " detay2 "



},
{
    HaberId:4,
HaberFotografi :   " bga9.jpg",
HaberBasligi : " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
HaberDetayi : " detay3 "



},


    ]
};
render() {

        return (
        <DataContext.Provider value={this.state}>
            {this.props.children}
        </DataContext.Provider>
        )

    }
}
const DataConsumer= DataContext.Consumer;
export default DataConsumer ;