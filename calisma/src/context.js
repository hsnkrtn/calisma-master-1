import React, { Component } from "react";

const DataContext = React.createContext();
// provider , consumeer
export class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {


      Haberler: [
        {
          HaberId: 1,
          HaberFotografi: " bga1.jpg",
          HaberBasligi:
            "Firat Universitesi Hastanesi1 haberleri burada gösterilecek",
          HaberDetayi: " detay1",
        },
        {
          HaberId: 2,
          HaberFotografi: " bga5.jpg",
          HaberBasligi:
            "Firat Universitesi Hastanesi haberleri burada gösterilecekFirat Universitesi Hastanesi2",
          HaberDetayi: "detay2",
        },
        {
          HaberId: 3,
          HaberFotografi: " bga2.jpg",
          HaberBasligi:
            " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
          HaberDetayi: " detay3",
        },
        {
          HaberId: 4,
          HaberFotografi: " bga2.jpg",
          HaberBasligi:
            " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
          HaberDetayi: " detay4 ",
        },
        {
          HaberId: 5,
          HaberFotografi: " bga2.jpg",
          HaberBasligi:
            " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
          HaberDetayi: " detay5 ",
        },
        {
          HaberId: 6,
          HaberFotografi: " bga2.jpg",
          HaberBasligi:
            " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
          HaberDetayi: " detay6 ",
        },
        {
          HaberId: 7,
          HaberFotografi: " bga2.jpg",
          HaberBasligi:
            " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
          HaberDetayi: " detay7 ",
        },
        {
          HaberId: 8,
          HaberFotografi: " bga2.jpg",
          HaberBasligi:
            " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
          HaberDetayi: " detay8 ",
        },
        {
          HaberId: 9,
          HaberFotografi: " bga2.jpg",
          HaberBasligi:
            " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
          HaberDetayi: " detay9 ",
        },
        {
          HaberId: 10,
          HaberFotografi: " bga2.jpg",
          HaberBasligi:
            " Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3",
          HaberDetayi: " detay10 Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3 ",
        },
      
      ],
Duyurular : [
      {
        DuyuruId:1,
        DuyuruBaslik: "1duyularin baslik burada bu sekilde gorunecek",
        Dtarih : "09.02.2022"
      },
      {
        DuyuruId:2,
        DuyuruBaslik: "2duyularin baslik burada bu sekilde gorunecek",
        Dtarih : "09.02.2022"
      },
      {
        DuyuruId:3,
        DuyuruBaslik: "3duyularin baslik burada bu sekilde gorunecek",
        Dtarih : "09.02.2022"
      },
      {
        DuyuruId:4,
        DuyuruBaslik: "4duyularin baslik burada bu sekilde gorunecek",
        Dtarih : "09.02.2022"
      },
      {
        DuyuruId:5,
        DuyuruBaslik: "5duyularin baslik burada bu sekilde gorunecek",
        Dtarih : "09.02.2022"
      },
      {
        DuyuruId:6,
        DuyuruBaslik: "6duyularin baslik burada bu sekilde gorunecek",
        Dtarih : "09.02.2022"
      },
      {
        DuyuruId:7,
        DuyuruBaslik: "7duyularin baslik burada bu sekilde gorunecek",
        Dtarih : "09.02.2022"
      },
      {
        DuyuruId:8,
        DuyuruBaslik: "8duyularin baslik burada bu sekilde gorunecek",
        Dtarih : "09.02.2022"
      }
],

    };
  }
  //  ArttirID  = ()=> {
  //     this.setState({
  //       hbrDiziboyutu:this.state.hbrDiziboyutu
  //     })
  //     console.log ( this.state.hbrDiziboyutu);
  // }

  componentDidMount() {

    console.log(this.state.hbrDiziboyutu);
  }

  render() {



    return (
      <DataContext.Provider value={{ ...this.state, ArttirID: this.ArttirID }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
const DataConsumer = DataContext.Consumer;
export default DataConsumer;
