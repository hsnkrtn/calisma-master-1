import React from "react";

function Cards() {
  return (
    <div className="Cards">


      <div className="Card1">
        <div className="CardIcon">
          <span><i class="fa fa-calendar"></i>


          </span>
        </div>

        <div className="CardHeader">
          <h4> Randevu Alma</h4>
          <p1
          >
            Bölüm ve doktor seçip randevu almak için tıklayınız.
          </p1>
        </div>

      </div>



      <div className="Card2">
        <div className="CardIcon">
          <span>
            <i class="fa fa-flask"></i>
          </span>
        </div>

        <div className="CardHeader">
          <h4> Test Sonuçları </h4>
          <p1> Test ve görüntüleme sonuçlarını öğrenmek için tıklayınız.</p1>
        </div>
      </div>



      <div className="Card3">
        <div className="CardIcon">
          <span><i class="fa fa-stethoscope"></i>
          </span>
        </div>

        <div className="CardHeader">
          <h4> Bölümler</h4>
          <p1> Tüm bölümlerimiz hakkında ayrıntılı bilgi almak için tıklayınız.</p1>
        </div>

      </div>
    </div>
  );
}

export default Cards;
