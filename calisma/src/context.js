import React, { Component } from "react";

const DataContext = React.createContext();
// provider , consumeer
export class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calis: 0,
      Tanitim: [
        {
          Id:"1",
          TanitimBaslik: "Tarihçe" ,
        TanitimFotograf :"bga5.jpg ",
          TanitimDetay : " tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak "
                   

      
      
      
      },
        {   Id:"2",
        TanitimBaslik: "Genel Tanıtım" },
        {  Id:"3",
         TanitimBaslik: "Kat Planı" },
        {   Id:"4",
        TanitimBaslik: "Resimler Ve Videolar" },
        {  Id:"5",
         TanitimBaslik: "Yemek Listesi" },
      ],
      Kurumsal: [
        { KurumsalBaslik: "Rektörümüz" },
        { KurumsalBaslik: "Misyon Ve Vizyon" },
        { KurumsalBaslik: "Değerlerimiz" },
        { KurumsalBaslik: "Amaç Ve Hedeflerimiz" },
        { KurumsalBaslik: "Kalite Yönetimi" },
      ],
      //Bolumler
DahiliTıpBilimleri : [

{DahiliBaslik: "Acil Tıp Anabilim Dalı  "},
{DahiliBaslik: "Adli Tıp Anabilim Dalı  " },
{DahiliBaslik: "Aile Hekimliği Anabilim Dalı " },
{DahiliBaslik: "Çocuk Sağlığı ve Hastalıkları Anabilim Dalı " },
{DahiliBaslik: "Çocuk ve Ergen Ruh Sağlığı Hastalıkları Anabilim Dalı " },
{DahiliBaslik: "Dermatoloji Anabilim Dalı " },
{DahiliBaslik: "Enfeksiyon Hastalıkları Anabilim Dalı  " },
{DahiliBaslik: "Fiziksel Tıp ve Rehabilitasyon Anabilim Dalı  " },
{DahiliBaslik: "Göğüs Hastalıkları Anabilim Dalı  " },
{DahiliBaslik: "Halk Sağlığı Anabilim Dalı " },
{DahiliBaslik: "İç Hastalıkları Anabilim Dalı " },
{DahiliBaslik: "Kardiyoloji Anabilim Dalı  " },
{DahiliBaslik: "Nörolojii Anabilim Dalı " },
{DahiliBaslik: "Nükleer Tıp Anabilim Dalı " },
{DahiliBaslik: " Psikiyatri Anabilim Dalı" },
{DahiliBaslik: "Radyasyon Onkolojisi Anabilim Dalı" },
{DahiliBaslik: "Radyodiagnostik Anabilim Dalı  " },
{DahiliBaslik: "Tıbbi Genetik Anabilim Dalı - Genetik Hastalıklar Değerlendirme Merkezi" },


],
CerrahiTipBilimleri:[
{CerrahiBaslik: "Anesteziyoloji ve Reanimasyon Anabilim Dalı  "},
{CerrahiBaslik: "Beyin Cerrahisi Anabilim Dalı   "},
{CerrahiBaslik: "Çocuk Cerrahisi Anabilim Dalı "},
{CerrahiBaslik: "Genel Cerrahi Anabilim Dalı  "},
{CerrahiBaslik: "Göğüs Cerrahisi Anabilim Dalı  "},
{CerrahiBaslik: "Göz Hastalıkları Anabilim Dalı  "},
{CerrahiBaslik: "Kadın Hastalıkları ve Doğum Anabilim Dalı "},
{CerrahiBaslik: "Kalp-Damar Cerrahisi Anabilim Dalı "},
{CerrahiBaslik: "Kulak Burun Boğaz Hastalıkları Anabilim Dalı   "},
{CerrahiBaslik: "Ortopedi ve Travmatoloji Anabilim Dalı   "},
{CerrahiBaslik: "Patoloji Anabilim Dalı  "},
{CerrahiBaslik: "Plastik ve Rekonstrüktif Cerrahi Anabilim Dalı  "},
{CerrahiBaslik: "Üroloji Anabilim Dalı "},

],
TemelTipBilimleri :[
  {TemelBaslik:"Biyokimya Anabilim Dalı  "},
  {TemelBaslik:"İmmünoloji Anabilim Dalı "},
  {TemelBaslik:"Mikrobiyoloji ve Klinik Mikrobiyoloji Anabilim Dalı "},
  {TemelBaslik:"Parazitoloji Anabilim Dalı  "},
  {TemelBaslik:"Tıbbi Biyoloji Anabilim Dalı"},
 
],
DigerTedaviUniteleri : [
  {DigerTedaviBaslik:"Geleneksel ve Tamamlayıcı Tıp Uygulama Merkezi(GETAT)"},
],


Yonetim :[
{YonetimBaslik: "Hastane Başhekimliği"},
{YonetimBaslik: "Müdür ve Müdür Yardımcıları"},
{YonetimBaslik: "Bilgi İşlem Koordinatörlüğü"},
{YonetimBaslik: "Hemşirelik Hizmetleri"},
{YonetimBaslik: "Organizasyon Şeması"},
],






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
          HaberDetayi:
            " detay10 Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3Firat Universitesi Hastaneshaberleri burada gösterilecek Firat Universitesi Hastanesi3 ",
        },
      ],
      Duyurular: [
        {
          DuyuruId: 1,
          DuyuruBaslik: "1duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 2,
          DuyuruBaslik: "2duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 3,
          DuyuruBaslik: "3duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 4,
          DuyuruBaslik: "4duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 5,
          DuyuruBaslik: "5duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 6,
          DuyuruBaslik: "6duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 7,
          DuyuruBaslik: "7duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 8,
          DuyuruBaslik: "8duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 9,
          DuyuruBaslik: "9duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 10,
          DuyuruBaslik: "10duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 11,
          DuyuruBaslik: "11duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 12,
          DuyuruBaslik: "12duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 13,
          DuyuruBaslik: "13duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
        {
          DuyuruId: 14,
          DuyuruBaslik: "14duyularin baslik burada bu sekilde gorunecek",
          Dtarih: "09.02.2022",
        },
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
    this.setState({
      Duyurular: this.state.Duyurular.reverse(),
      Haberler: this.state.Haberler.reverse(),
    });
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
const DataConsumer = DataContext.Consumer;
export default DataConsumer;
