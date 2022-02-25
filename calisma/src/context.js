import React, { Component } from "react";

const DataContext = React.createContext();

// provider , consumeer
export class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GenelTanitimVeriler: [
        {
          Baslik: " ",
          Fotograf: "hbg5.jpg",
          Detay: "",
        },
      ],

      Tanitim: [
        {
          id: "1",
          Baslik: "Tarihçe",
          Fotograf: "bga2.jpg ",
          Detay:
            "  tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
        {
          id: "2",
          Baslik: "Genel Tanıtım",
          Detay:
            "  tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
        {
          id: "3",
          Baslik: "Kat Planı",
          Detay:
            "  tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
        {
          id: "4",
          Baslik: "Resimler Ve Videolar",
          Detay:
            "  tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
        {
          id: "5",
          Baslik: "Yemek Listesi",
          Detay:
            "  tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
      ],
      Kurumsal: [
        {
          id: "1",
          Baslik: "Rektörümüz",
          Detay:
            "  tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
        {
          id: "2",
          Baslik: "Misyon Ve Vizyon",
          Detay:
            "  tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
        {
          id: "3",
          Baslik: "Değerlerimiz",
          Detay:
            "  tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
        {
          id: "4",
          Baslik: "Amaç Ve Hedeflerimiz",
          Detay:
            "tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
        {
          id: "5",
          Baslik: "Kalite Yönetimi",
          Detay:
            "tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak tanitim detaylari burada olacak ",
        },
      ],
      //Bolumler
      DahiliTıpBilimleri: [
        { Baslik: "Acil Tıp Anabilim Dalı  " },
        { Baslik: "Adli Tıp Anabilim Dalı  " },
        { Baslik: "Aile Hekimliği Anabilim Dalı " },
        { Baslik: "Çocuk Sağlığı ve Hastalıkları Anabilim Dalı " },
        {
          Baslik: "Çocuk ve Ergen Ruh Sağlığı Hastalıkları Anabilim Dalı ",
        },
        { Baslik: "Dermatoloji Anabilim Dalı " },
        { Baslik: "Enfeksiyon Hastalıkları Anabilim Dalı  " },
        { Baslik: "Fiziksel Tıp ve Rehabilitasyon Anabilim Dalı  " },
        { Baslik: "Göğüs Hastalıkları Anabilim Dalı  " },
        { Baslik: "Halk Sağlığı Anabilim Dalı " },
        { Baslik: "İç Hastalıkları Anabilim Dalı " },
        { Baslik: "Kardiyoloji Anabilim Dalı  " },
        { Baslik: "Nörolojii Anabilim Dalı " },
        { Baslik: "Nükleer Tıp Anabilim Dalı " },
        { Baslik: " Psikiyatri Anabilim Dalı" },
        { Baslik: "Radyasyon Onkolojisi Anabilim Dalı" },
        { Baslik: "Radyodiagnostik Anabilim Dalı  " },
        {
          Baslik:
            "Tıbbi Genetik Anabilim Dalı - Genetik Hastalıklar Değerlendirme Merkezi",
        },
      ],
      CerrahiTipBilimleri: [
        { Baslik: "Anesteziyoloji ve Reanimasyon Anabilim Dalı  " },
        { Baslik: "Beyin Cerrahisi Anabilim Dalı   " },
        { Baslik: "Çocuk Cerrahisi Anabilim Dalı " },
        { Baslik: "Genel Cerrahi Anabilim Dalı  " },
        { Baslik: "Göğüs Cerrahisi Anabilim Dalı  " },
        { Baslik: "Göz Hastalıkları Anabilim Dalı  " },
        { Baslik: "Kadın Hastalıkları ve Doğum Anabilim Dalı " },
        { Baslik: "Kalp-Damar Cerrahisi Anabilim Dalı " },
        { Baslik: "Kulak Burun Boğaz Hastalıkları Anabilim Dalı   " },
        { Baslik: "Ortopedi ve Travmatoloji Anabilim Dalı   " },
        { Baslik: "Patoloji Anabilim Dalı  " },
        { Baslik: "Plastik ve Rekonstrüktif Cerrahi Anabilim Dalı  " },
        { Baslik: "Üroloji Anabilim Dalı " },
      ],
      TemelTipBilimleri: [
        { Baslik: "Biyokimya Anabilim Dalı  " },
        { Baslik: "İmmünoloji Anabilim Dalı " },
        { Baslik: "Mikrobiyoloji ve Klinik Mikrobiyoloji Anabilim Dalı " },
        { Baslik: "Parazitoloji Anabilim Dalı  " },
        { Baslik: "Tıbbi Biyoloji Anabilim Dalı" },
      ],
      DigerTedaviUniteleri: [
        {
          Baslik: "Geleneksel ve Tamamlayıcı Tıp Uygulama Merkezi(GETAT)",
        },
      ],

      Yonetim: [
        { id: "1", Baslik: "Hastane Başhekimliği" },
        { id: "2", Baslik: "Müdür ve Müdür Yardımcıları" },
        { id: "3", Baslik: "Bilgi İşlem Koordinatörlüğü" },
        { id: "4", Baslik: "Hemşirelik Hizmetleri" },
        { id: "5", Baslik: "Organizasyon Şeması" },
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
