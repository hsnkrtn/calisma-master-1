import React, { Component } from "react";
import "./App.css";
import NavigasyonBar from "./component/NavigasyonBar";
import Carousel from "./component/Carousel";
import Cards from "./component/Cards";
import Yonetici from "./component/Yonetici";
import Haberler from "./component/Haberler";
import Duyurular from "./component/Duyurular";
import Footer from "./component/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigasyonBar />
        <Carousel />
        <Cards />

        <Haberler/> 
        <Duyurular/>
        <Footer/>
      </div>
    );
  }
}
export default App;
