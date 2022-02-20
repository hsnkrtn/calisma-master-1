import React, { Component } from "react";
import "./App.css";
import NavigasyonBar from "./component/NavigasyonBar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import GenelTanıtım from "./component/GenelTanıtım";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigasyonBar />
          <div className="ComponentsContent">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/GenelTanitim">
                <GenelTanıtım />
              </Route>
            </Switch>     
            <Footer />
          </div>
     
        </div>
      </Router>
    );
  }
}
export default App;
