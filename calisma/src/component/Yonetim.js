import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import {HastaneKisiFotograflari} from "./Helpers/KisiFotografları"

function Yonetim(props) {
  const location = useLocation();
  const Gelenveriler = location.state.Gonderilenveriler;
  const Baslik = location.state.Baslik;
const Fotograf=Gelenveriler[0].Fotograf;
console.log (Fotograf)

  return (
    <div className="RouterSayfasi">
      <div className="RouterYonetimSayfasiIcerik">
        <h1>{Baslik}</h1>
        <div>
          
          <img  className="Bashekimfotograf" src={HastaneKisiFotograflari[3].Fotograf}  ></img> <h1> Başhekim Prof. Dr. İrfan KAYGUSUZ </h1> <p1> Elazığ’da 1967 yılında doğdu. 1991 yılında İstanbul Üniversitesi İstanbul Tıp Fakültesi’nden mezun oldu. 1994 Nisan dönemi Tıpta Uzmanlık Sınavını kazanarak Fırat Üniversitesi Tıp Fakültesi Kulak Burun Boğaz Anabilim Dalı’nda araştırma görevlisi olarak akademik hayatına başladı. 1998 yılında “Özefagus Koroziv Yanıklarının İyileşmesinde Interferon–alfa-2b ve Octreotide Etkinliği” adlı tez ile ihtisasını tamamladı ve Kulak Burun Boğaz Hastalıkları Uzmanı oldu. Daha sonra 1999 yılında aynı anabilim dalına yardımcı doçent doktor olarak atandı. 14.04.2004 tarihinde girdiği doçentlik sınavını başarı ile geçerek Doçent unvanını aldı. 18.09.2009 tarihinde Fırat Üniversitesi Tıp Fakültesi Kulak Burun Boğaz Anabilim Dalı’nda Profesör kadrosuna atandı. 13.09.2012 tarihinde Ağız Yüz ve Çene Cerrahisi Uzmanı unvanını aldı. 2018 yılından beri Türk Kulak Burun Boğaz ve Baş Boyun Cerrahisi Yeterlik Yürütme Kurulu Başkanlığı görevini sürdürmektedir. Bugüne kadar akademik ve idari olarak almış olduğu görevler; Fırat Üniversitesi Hastanesi Başhekimliği (2004–2008), F.Ü. Tıp Fakültesi KBB Anabilim Dalı Başkanlığı (2004–2007),F.Ü. Tıp Fakültesi Dekan Yardımcılığı (2004–2008),F.Ü. Tıp Fakültesi Yönetim Kurulu Üyeliği (2004–2012),F.Ü. Tıp Fakültesi Fakülte Kurulu Üyeliği (2009–2012/2018-……),F.Ü. Sağlık Bilimleri Enstitüsü Kurulu Üyeliği (2004–2007),F.Ü. Tıp Fakültesi Dönem III Eğitim Koordinatörlüğü (2017-2020),F.Ü. Tıp Fakültesi Eğitim Baş Koordinatörlüğü (2017-2020),F.Ü. Tıp Fakültesi Cerrahi Tıp Bilimleri Bölüm Başkanlığı (2018-….),Fırat Üniversitesi Hastanesi Yönetim Kurulu Üyeliği (2018-…..),F.Ü. Tıp Fakültesi Dekan Yardımcılığı (2020-2020),Türk KBB ve BBC Yeterlik Kurulu Eğitim Komisyonu Üyeliği (2008-2010) ve Başkanlığı (2010-2012),Türk KBB ve BBC Yeterlik Kurulu Akreditasyon Komisyonu Üyeliği (2014-2016) ve Başkanlığı (2016-2018),Türk KBB ve BBC Derneği Yönetim Kurulu Üyeliği (2016-2018),Türk KBB ve BBC Derneği Danışma Kurulu Üyeliği (2016-……),Fırat-Dicle Havzası KBB ve BBC Derneği Başkanlığı (2015-2018),Sağlık Bakanlığı Ağız, Yüz ve Çene Cerrahisi II. Dönem (2012-2013) ve III. Dönem (2014-…..) TUKMOS Komisyon Üyeliği görevlerinde bulunmuştur. Mesleği ile ilgili çok sayıda bilimsel dernek üyeliğine sahiptir. Ayrıca ülkemizde yayınlanan 10’ dan fazla derginin de danışma kurulu üyeliğini yapmaktadır. Halen Fırat Tıp Dergisi Editörlüğünü sürdürmektedir. Bugüne kadar ülkemizde düzenlenen 16 sempozyum, kongre veya kursta düzenleme komitesinde veya sekreteryasında; 47 kongre ve sempozyuma da ise moderatör, oturum başkanı, konuşmacı veya panelist olarak görev almıştır. Ayrıca 41 kongre ve sempozyuma da dinleyici olarak katılmıştır. Bu toplantılarda çok sayıda kurs düzenlemiştir. Bugüne kadar 10 doktora tezi yönetmiş ve ülkemizde yapılan farklı sempozyum ve kongrelerde 8 bilimsel çalışma ile (üçü birincilik) ödül almıştır. Ayrıca ülkemizde yayınlanan iki tıp dergisi tarafından da yılın en iyi bilimsel danışman (hakem) ödülüne layık görülmüştür. 58’i uluslararası, 93’ü ulusal olmak üzere toplam 151 bilimsel yayını (makale) ve 13’ü uluslararası, 93’ü ulusal olmak üzere 106 bilimsel bidirisi bulunmaktadır. Makalelerine bugüne kadar Web of Science portalında 636 atıf yapılmıştır. Kulak burun boğaz alanında yayınlanan 7 bilimsel kitapta bölüm yazarlığı ve yine bu alanda İngilizce olarak yayınlanan 5 bilimsel kitabın Türkçeye çevrilmesinde bölüm çeviriciliği bulunmaktadır. Halen Fırat Üniversitesi Tıp Fakültesi Kulak Burun Boğaz Anabilim Dalı’nda profesör doktor olarak çalışmaktadır. Yabancı dil olarak ingilizce bilmektedir. Evli ve iki çocuk babasıdır.</p1>{" "}
        </div>
        <ul className="YonetimCards">
          {Gelenveriler.map((Gelenveriler, index) => {
            return (
              <li className="YonetimCard">
                <img className="YonetimFotograf" src= {Fotograf} ></img>
                <section className="YonetimDetay">
                  <h1>
                    {Gelenveriler.unvan} {Gelenveriler.Adi}
                  </h1>
                  <p1> {Gelenveriler.Hakkinda} </p1>
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Yonetim;
