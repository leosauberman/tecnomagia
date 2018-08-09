import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Ingredients from './Ingredients';
import Help from './Help';
import Vamos from './Vamos';
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Ingredients/>
        <Help/>
        <Vamos/>
        <Footer/>
      </div>
    );
  }
}

export default App;
