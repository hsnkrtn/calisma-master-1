import React, { Component } from "react";
import fatihfirdolasfotografi from "../src/component/Resimler/KisiFotografları/fatihfirdolasfotografi.jpg";
import ayhanakbalfotografi from "../src/component/Resimler/KisiFotografları/ayhanakbalfotografi.jpg";
import aysealbayfotografi from "../src/component/Resimler/KisiFotografları/aysealbayfotografi.jpeg";
import azperilioglufotografi from "../src/component/Resimler/KisiFotografları/azperilioglufotografi.jpg";
import bashekimfotografi from "../src/component/Resimler/KisiFotografları/bashekimfotografi.jpg";
import birginbidavfotografi from "../src/component/Resimler/KisiFotografları/birginbidavfotografi.jpg";
import cevatgunfotografi from "../src/component/Resimler/KisiFotografları/cevatgunfotografi.jpg";
import enginozkayafotografi from "../src/component/Resimler/KisiFotografları/enginozkayafotografi.jpg";
import feritgunesfotografi from "../src/component/Resimler/KisiFotografları/feritgunesfotografi.jpg";
import gokhanartasfotografi from "../src/component/Resimler/KisiFotografları/gokhanartasfotografi.jpg";
import gulizarozturkfotografi from "../src/component/Resimler/KisiFotografları/gulizarozturkfotografi.jpg";
import ibrahimaslanfotografi from "../src/component/Resimler/KisiFotografları/ibrahimaslanfotografi.jpg";
import ilyasturkfotografi from "../src/component/Resimler/KisiFotografları/ilyasturkfotografi.jpeg";
import ismaildemirelfotografi from "../src/component/Resimler/KisiFotografları/ismaildemirelfotografi.jpg";
import meltemyildizfotografi from "../src/component/Resimler/KisiFotografları/meltemyildizfotografi.jpeg";
import metincebecifotografi from "../src/component/Resimler/KisiFotografları/metincebecifotografi.jpg";
import muratgonenfotografi from "../src/component/Resimler/KisiFotografları/muratgonenfotografi.jpg";
import mustafayildizfotografi from "../src/component/Resimler/KisiFotografları/mustafayildizfotografi.jpeg";
import nurcanincefotografi from "../src/component/Resimler/KisiFotografları/nurcanincefotografi.png";
import selcenozkayafotografi from "../src/component/Resimler/KisiFotografları/selcenozkayafotografi.jpeg";
import talatceylanfotografi from "../src/component/Resimler/KisiFotografları/talatceylanfotografi.jpg";

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
            "Fırat Üniversitesi Hastanesi, T.C. Sağlık Bakanlığı ile Üniversite Rektörlüğü arasında yapılan ve 24.12.1984 tarihinden itibaren yürürlüğe giren bir protokole binaen Elazığ doğumevinin üniversitemize devredilmesi ile Ocak1985 'ten itibaren faaliyetlerine başlamıştır. Önceleri adı F.Ü. Araştırma ve Uygulama Hastanesi iken 1997' de Senato kararıyla F.Ü. Fırat Tıp Merkezi olarak adlandırılmıştır. 2008 yılı içerisinde hastanenin ismi son kez “Fırat Üniversitesi Hastanesi” olarak değiştirilmiştir. Fırat Üniversitesi Hastanesi bugün üçüncü basamak sağlık hizmeti veren bölge hastanesi konumundadır. Hastanemiz; 1053 yatak kapasiteli 125000 metrekare kapalı alana sahip, 3 bloktan oluşmaktadır. P Blokta; İç Hastalıkları (Genel Dahiliye, Romatoloji, Nefroloji, Hematoloji, Endokrinoloji, Gastoroentoroloji, Onkoloji Bilim Dalı), Dermatoloji, Enfeksiyon Hastalıkları, Kardiyoloji, Koroner Anjiografi ve Koroner Yoğun Bakım, Fiziksel Tıp ve Rehabilitasyon, Çocuk Sağlığı ve Hastalıkları (Allerji, Endokrinoloji, Gastroentroloji, Hematoloji, Kardiyoloji, Nöroloji, Yeni Doğan, Nefroloji, Beslenme ve Metabolizma, Enfeksiyon Bilim Dalı), Nöroloji, Halk Sağlığı, Aile Hekimliği, Psikiyatri, Göğüs Hastalıkları, Genel Cerrahi, Göz Hastalıkları, Kulak-Burun-Boğaz Hastalıkları, Kadın Hastalıkları ve Doğum, Ortopedi ve Travmatoloji, Üroloji, Nöroşirürji, Kalp ve Damar Cerrahisi, Göğüs Cerrahisi, Anestezi ve Reanimasyon, Çocuk Cerrahisi, Plastik ve Rekonstrüktif Cerrahi, Algoloji, Ruh Sağlığı, Yeni Doğan Yoğun Bakım Ünitesi, Çocuk Yoğun Bakım Ünitesi, Yara ve Yanık Merkezi, Uyku Bozuklukları Tedavi Ünitesi, Total Parenteral Beslenme Ünitesi (TPN) birimler ve klinikler hizmet vermektedir. O Blokta; Poliklinikler, Hemodiyaliz, Radyasyon Onkolojisi, Onkoloji Gündüz Tedavi Ünitesi, Ameliyathane, Merkez Laboratuvarı, Öğretim Üyeleri Odaları, İdari Birimler, Radyoloji, Nükleer Tıp, Genetik, G.E.T.A.T (Geleneksel ve Tamamlayıcı Tıp),Arşiv hizmet vermektedir. ",
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
            "Misyonumuz: İnsanların temel hak ve özgürlükleri arasında yer alan sağlık hizmetlerini; etik ilkeler çerçevesinde, kaliteli, özgün, güvenilir ve evrensel değerler ölçeğinde, bilgi ve beceri ile donatılmış alanında uzman kadromuz ile ileri bilim ve teknoloji kaynaklarını etkin kullanarak nitelikli bir şekilde vermek ve hasta, hasta yakını ve çalışan memnuniyetini en üst seviyeye çıkarmaktır. <br></br> Vizyonumuz: Kaliteli hizmet anlayışını, güveni, hasta mahremiyetini ve memnuniyetini ilke edinmiş, ileri teknoloji ile donatılmış, çalışanları ile ekip ruhunu oluşturan, kurumsal kimliği ön plana çıkaran, ulusal ve uluslararası alanda tıpta yaşanan gelişmeleri yakından takip eden, araştırmacı ve sorgulayıcı bir anlayışla dünya standartlarında kaliteli sağlık hizmeti sunmak.",
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
        {
          id: "1",
          Baslik: "Hastane Başhekimliği",
          Kisiler: [
            {
              id: "1",
              unvan: "Başhekim Prof. Dr.",
              Adi: "İrfan KAYGUSUZ",
              Hakkinda:
                "Elazığ’da 1967 yılında doğdu. 1991 yılında İstanbul Üniversitesi İstanbul Tıp Fakültesi’nden mezun oldu. 1994 Nisan dönemi Tıpta Uzmanlık Sınavını kazanarak Fırat Üniversitesi Tıp Fakültesi Kulak Burun Boğaz Anabilim Dalı’nda araştırma görevlisi olarak akademik hayatına başladı. 1998 yılında “Özefagus Koroziv Yanıklarının İyileşmesinde Interferon–alfa-2b ve Octreotide Etkinliği” adlı tez ile ihtisasını tamamladı ve Kulak Burun Boğaz Hastalıkları Uzmanı oldu. Daha sonra 1999 yılında aynı anabilim dalına yardımcı doçent doktor olarak atandı. 14.04.2004 tarihinde girdiği doçentlik sınavını başarı ile geçerek Doçent unvanını aldı. 18.09.2009 tarihinde Fırat Üniversitesi Tıp Fakültesi Kulak Burun Boğaz Anabilim Dalı’nda Profesör kadrosuna atandı. 13.09.2012 tarihinde Ağız Yüz ve Çene Cerrahisi Uzmanı unvanını aldı. 2018 yılından beri Türk Kulak Burun Boğaz ve Baş Boyun Cerrahisi Yeterlik Yürütme Kurulu Başkanlığı görevini sürdürmektedir. Bugüne kadar akademik ve idari olarak almış olduğu görevler; Fırat Üniversitesi Hastanesi Başhekimliği (2004–2008), F.Ü. Tıp Fakültesi KBB Anabilim Dalı Başkanlığı (2004–2007),F.Ü. Tıp Fakültesi Dekan Yardımcılığı (2004–2008),F.Ü. Tıp Fakültesi Yönetim Kurulu Üyeliği (2004–2012),F.Ü. Tıp Fakültesi Fakülte Kurulu Üyeliği (2009–2012/2018-……),F.Ü. Sağlık Bilimleri Enstitüsü Kurulu Üyeliği (2004–2007),F.Ü. Tıp Fakültesi Dönem III Eğitim Koordinatörlüğü (2017-2020),F.Ü. Tıp Fakültesi Eğitim Baş Koordinatörlüğü (2017-2020),F.Ü. Tıp Fakültesi Cerrahi Tıp Bilimleri Bölüm Başkanlığı (2018-….),Fırat Üniversitesi Hastanesi Yönetim Kurulu Üyeliği (2018-…..),F.Ü. Tıp Fakültesi Dekan Yardımcılığı (2020-2020),Türk KBB ve BBC Yeterlik Kurulu Eğitim Komisyonu Üyeliği (2008-2010) ve Başkanlığı (2010-2012),Türk KBB ve BBC Yeterlik Kurulu Akreditasyon Komisyonu Üyeliği (2014-2016) ve Başkanlığı (2016-2018),Türk KBB ve BBC Derneği Yönetim Kurulu Üyeliği (2016-2018),Türk KBB ve BBC Derneği Danışma Kurulu Üyeliği (2016-……),Fırat-Dicle Havzası KBB ve BBC Derneği Başkanlığı (2015-2018),Sağlık Bakanlığı Ağız, Yüz ve Çene Cerrahisi II. Dönem (2012-2013) ve III. Dönem (2014-…..) TUKMOS Komisyon Üyeliği görevlerinde bulunmuştur. Mesleği ile ilgili çok sayıda bilimsel dernek üyeliğine sahiptir. Ayrıca ülkemizde yayınlanan 10’ dan fazla derginin de danışma kurulu üyeliğini yapmaktadır. Halen Fırat Tıp Dergisi Editörlüğünü sürdürmektedir. Bugüne kadar ülkemizde düzenlenen 16 sempozyum, kongre veya kursta düzenleme komitesinde veya sekreteryasında; 47 kongre ve sempozyuma da ise moderatör, oturum başkanı, konuşmacı veya panelist olarak görev almıştır. Ayrıca 41 kongre ve sempozyuma da dinleyici olarak katılmıştır. Bu toplantılarda çok sayıda kurs düzenlemiştir. Bugüne kadar 10 doktora tezi yönetmiş ve ülkemizde yapılan farklı sempozyum ve kongrelerde 8 bilimsel çalışma ile (üçü birincilik) ödül almıştır. Ayrıca ülkemizde yayınlanan iki tıp dergisi tarafından da yılın en iyi bilimsel danışman (hakem) ödülüne layık görülmüştür. 58’i uluslararası, 93’ü ulusal olmak üzere toplam 151 bilimsel yayını (makale) ve 13’ü uluslararası, 93’ü ulusal olmak üzere 106 bilimsel bidirisi bulunmaktadır. Makalelerine bugüne kadar Web of Science portalında 636 atıf yapılmıştır. Kulak burun boğaz alanında yayınlanan 7 bilimsel kitapta bölüm yazarlığı ve yine bu alanda İngilizce olarak yayınlanan 5 bilimsel kitabın Türkçeye çevrilmesinde bölüm çeviriciliği bulunmaktadır. Halen Fırat Üniversitesi Tıp Fakültesi Kulak Burun Boğaz Anabilim Dalı’nda profesör doktor olarak çalışmaktadır. Yabancı dil olarak ingilizce bilmektedir. Evli ve iki çocuk babasıdır.",
              Fotograf: bashekimfotografi,
            },
            {
              id: "2",
              unvan: " Başhekim Yardımcısı Prof. Dr.",
              Adi: "Fatih FIRDOLAŞ",
              Hakkinda:
                "1976 yılında Elazığ’ da doğdu. İlk, orta ve lise eğitimini Elazığ’ da tamamladı.2000 yılında Fırat Üniversitesi Tıp Fakültesinden mezun oldu.2000-2002 Van Askeri Hastanesinde Yedek Subay olarak görev yaptı.2002-2008 yılları arasında Fırat Üniversitesi Üroloji Anabilim Dalında uzmanlık eğitimini tamamladı. 2008-2009 yılları arasında Diyarbakır Bismil Devlet Hastanesinde mecburi hizmetini tamamladı.2009 yılında Fırat Üniversitesi Üroloji Anabilim Dalına Yardımcı Doçent olarak atandı. 2014 yılında Doçent unvanını, 2019 yılında ise Profesör unvanını aldı. 2015 yılından itibaren Fırat Üniversitesi Hastanesi Başhekim Yardımcısı olarak görevlendirildi. 2020 yılı içerisinde Fırat Üniversitesi Tıp Fakültesi Dekan Yardımcısı olarak görev yaptı. Ulusal ve uluslararası makale ve bildirileri bulunmakta olup evli ve iki çocuk babasıdır.        ",
              Fotograf: fatihfirdolasfotografi,
            },
            {
              id: "3",
              unvan: "Başhekim Yardımcısı Prof. Dr.",
              Adi: "İsmail DEMİREL",
              Hakkinda:
                "1968 yılında doğdu. 1994 yılında Uludağ Üniversitesi Tıp Fakültesinden mezun oldu. 1994-1995 yılları arasında Kovancılar Çaybağı Sağlık Ocağında, 1995-1997 yılları arasında Kovancılar Sağlık Ocağında, 1997-2002 yılları arasında Elazığ Abdullahpaşa Sağlık Ocağında Pratisyen Doktor olarak görev yapmıştır. 2002-2007 yılında Fırat Üniversitesi Anesteziyoloji ve Reanimasyon Anabilim Dalında uzmanlık eğitimini tamamladı. 2007-2009 yılları arasında Elazığ Harput Devlet Hastanesinde, 2009-2011 yılları arasında Elazığ Eğitim ve Araştırma Hastanesinde Uzman Doktor olarak görev yapmıştır. 2011 yılında Fırat Üniversitesi Hastanesi Anesteziyoloji ve Reanimasyon Anabilim Dalı Başkanlığında Doktor Öğretim Üyesi olarak göreve başladı. 2015 yılından itibaren Doçentlik unvanını aldı. 2018 yılında Yoğun Bakımda yan dalını tamamladı. 2020 yılında Profesör unvanını aldı. Evli ve iki çocuk babasıdır.",
              Fotograf: ismaildemirelfotografi,
            },
            {
              id: "4",
              unvan: "Başhekim Yardımcısı Doç. Dr.",
              Adi: "Gökhan ARTAŞ ",
              Hakkinda:
                "1979 yılında Elazığ’ da doğdu. İlk, orta ve lise eğitimini Elazığ’ da tamamladı. 1997 yılında Fırat Üniversitesi Tıp Fakültesi’ ne girdi. 2003 yılında mezun oldu ve aynı yıl Elazığ Karakoçan ilçesine atandı. 2003-2004 yılları arasında İzmir Hava Lisan Okul Komutanlığı’nda askerlik hizmetini yaptı. 2004-2009 yılları arasında Karakoçan ilçesinde başhekim yardımcılığı, başhekimlik ve sağlık grup başkanlığı görevlerini icra etti. 2009 yılında Fırat Üniversitesi Hastanesi’ nde Patoloji Anabilim Dalı’ nda uzmanlık eğitime başlayıp 2013 senesinde Uzman unvanını aldı. 2018 yılında Doçentlik sınavını kazanarak doçent oldu. 100’ ün üzerinde uluslarası - ulusal makale ve bildirisi bulunmaktadır. İyi derecede İngilizce ve Almanca bilmektedir. Evli ve iki çocuk babasıdır.",
              Fotograf: gokhanartasfotografi,
            },
            {
              id: "5",
              unvan: "Doç. Dr.",
              Adi: "Murat GÖNEN ",
              Hakkinda:
                "1972 yılında Elbistan’ da doğdu. İlk, orta ve lise eğitimini Elbistan’ da tamamladı. 1996 yılında Erciyes Üniversitesi Tıp Fakültesinden mezun oldu. 2000-2004 yılları arasında Fırat Üniversitesi Nöroloji Anabilim Dalında uzmanlık eğitimini tamamladı. 2004-2006 yılları arasında Sivas Devlet Hastanesinde mecburi hizmetini tamamladı. 2006-2013 yılında Elbistan Devlet Hastanesinde görev yaptı. 2007-2012 yılında Elbistan Devlet Hastanesinde Başhekimlik görevi yaptı. 2013 yılında Fırat Üniversitesi Hastanesi Nöroloji Anabilim Dalında Öğretim Üyesi olarak göreve başladı. 2020 yılından itibaren Fırat Üniversitesi Hastanesi Başhekim Yardımcısı olarak görevlendirildi. Ulusal ve uluslararası makale ve bildirileri bulunmakta olup evli ve üç çocuk babasıdır.  ",
              Fotograf: muratgonenfotografi,
            },
          ],
        },
        {
          id: "2",
          Baslik: "Müdür ve Müdür Yardımcıları",
          Kisiler: [
            {
              id: "1",
              unvan: "Başmüdür",
              Adi: "İlyas TÜRK",
              Hakkinda:
                "1972 yılında Elazığ’ da doğdu. İlk, orta ve lise eğitimini Elazığ’ da tamamladı. 1995 yılında Fırat Üniversitesi Hastanesinde Memur olarak göreve başladı. 2000 yılında Anadolu Üniversitesi İktisat Fakültesi Kamu Yönetimi bölümünden mezun oldu. 2006-2010 yılları arasında hastanede Gece İdarecisi olarak görev yaptı. 2010-2012 yılları arasında Hastane Müdür Yardımcısı olarak görevlendirildi. 2012 yılında Hastane Müdürü unvanını aldı. 2014 yılında Fırat Üniversitesi Sosyal Bilimler Enstitüsü Sağlık Kurumları İşletmeciliğinde yüksek lisansını tamamladı. 2014 yılından itibaren Kalite Koordinatörlüğü yapmaya başladı. 2020 yılında Üniversite Hastaneleri Başmüdürü unvanını almış olup evli ve üç çocuk babasıdır.",
              Fotograf: ilyasturkfotografi,
            },
            {
              id: "2",
              unvan: "Müdür",
              Adi: "Metin CEBECİ",
              Hakkinda: "",
              Fotograf: metincebecifotografi,
            },
            {
              id: "3",
              unvan: "Müdür",
              Adi: "Talet CEYLAN",
              Hakkinda: "",
              Fotograf: talatceylanfotografi,
            },
            {
              id: "4",
              unvan: "İnsan Kaynakları Müdürü",
              Adi: "Birgin BİDAV",
              Hakkinda: "",
              Fotograf: birginbidavfotografi,
            },
            {
              id: "5",
              unvan: "Müdür Yardımcısı",
              Adi: "Ahmet Zafer PERİLİOĞLU ",
              Hakkinda: "",
              Fotograf: azperilioglufotografi,
            },
            {
              id: "6",
              unvan: "Müdür Yardımcısı",
              Adi: "Ayşe ALBAY ",
              Hakkinda: "",
              Fotograf: aysealbayfotografi,
            },
            {
              id: "7",
              unvan: "Müdür Yardımcısı",
              Adi: "Cevat GÜN ",
              Hakkinda: "",
              Fotograf: cevatgunfotografi,
            },
            {
              id: "8",
              unvan: "Müdür Yardımcısı",
              Adi: "Engin ÖZKAYA ",
              Hakkinda: "",
              Fotograf: enginozkayafotografi,
            },
            {
              id: "9",
              unvan: "Müdür Yardımcısı",
              Adi: "Ferit GÜNEŞ",
              Hakkinda: "",
              Fotograf: feritgunesfotografi,
            },
            {
              id: "10",
              unvan: "Müdür Yardımcısı",
              Adi: "İbrahim ASLAN",
              Hakkinda: "",
              Fotograf: ibrahimaslanfotografi,
            },
          ],
        },
        {
          id: "3",
          Baslik: "Bilgi İşlem Koordinatörlüğü",
          Kisiler: [
            {
              id: "1",
              unvan: "Bilgi İşlem Koordinatörü Yardımcı Doçent Doktor",
              Adi: "Ayhan AKBAL",
              Hakkinda:
                "1977 yılında Elazığ’da doğdu. 1999 yılında Fırat Üniversitesi Elektrik-Elektronik Mühendisliğinden mezun oldu. Aynı yıl İstanbul’da Bilişim Sektöründe çeşitli firmalarda çalıştı. Aynı zamanda Fırat Üniversitesi Elektrik-Elektronik Mühendisliği Telekomünikasyon Anabilim Dalında Yüksek Lisansa başladı. 2001 yılında Elektrik-Elektronik Mühendisliğinde Araştırma Görevlisi olarak göreve başladı. 2003 yılında Yüksek Lisansını tamamlayarak Doktoraya başladı. Bu süreçte Fırat Üniversitesi Bilgi İşlem Daire Başkanlığında Başkan Yardımcısı görevine başlayarak , Enformatik Bölüm Başkan Yardımcılığını, Fırat Üniversitesi Eğitim Genel Koordinatörlüğü, Network Management (Sistem Yöneticisi, ECDL Test Sorumlusu, Bilgi İşlem Dairesinin ( yazılım geliştirme, arıza giderme, sistem konfigürasyonu vs gibi) görevlerini yaptı. 2008 yılında Telekomünikasyon Anabilim Dalında Doktorasını tamamlayarak, Öğretim Üyesi olarak atandı. Aynı yıl Fırat Üniversitesi Hastanesi Bilgi İşlem ve Kalite Koordinatörü olarak atandı. Aynı zamanda Elektrik-Elektronik Mühendisliği Telekomünikasyon Anabilim Dalı Başkanı olarak ta atandı. Alanında birçok altyapı projesi gerçekleştirdi. Bir çok uluslararası ve ulusal konferansta projelerini ve çalışmalarını sundu.",
              Fotograf: ayhanakbalfotografi,
            },
          ],
        },
        { id: "4", Baslik: "Hemşirelik Hizmetleri",  Kisiler: [
          {
            id: "1",
            unvan: "Başhemşire",
            Adi: "Nurcan İNCE",
            Hakkinda:
"",            Fotograf:nurcanincefotografi,
          },
          {
            id: "2",
            unvan: "Başhemşirelik Hizmetleri Müdür",
            Adi: "Gülizar ÖZTÜRK",
            Hakkinda: "",
            Fotograf: gulizarozturkfotografi,
          },
          {
            id: "3",
            unvan: "Başhemşirelik Hizmetleri Müdür Yardımcısı",
            Adi: "Meltem YILDIZ",
            Hakkinda: "",
            Fotograf: meltemyildizfotografi,
          },
          {
            id: "4",
            unvan: "Başhemşirelik Hizmetleri Müdür Yardımcısı",
            Adi: "Mustafa YILDIZ",
            Hakkinda: "",
            Fotograf: mustafayildizfotografi,
          },
          {
            id: "5",
            unvan: "Başhemşirelik Hizmetleri Müdür Yardımcısı",
            Adi: "Selcen ÖZKAYA",
            Hakkinda: "",
            Fotograf: selcenozkayafotografi,
          },
          
        ], },
        { id: "5", Baslik: "Organizasyon Şeması" },
      ],

   


      Haberler: [
        {
          HaberId: 1,
          HaberFotografi: " bga2.jpg",
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
