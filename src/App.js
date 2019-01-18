import React, { Component } from 'react';
import './resources/style.css'
import Header  from './components/header-footer'
import Featured from './components/featured/index'
import TimeUntil from './components/featured/timeUntil'
import VeronaInfo from './components/veronaInfo'
import Highlights from './components/Highlights/index'
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header-footer/Footer';
import {Element} from 'react-scroll'
import index from './resources/style.css'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Element name="home">
        <Header/>
            </Element>
        <Featured/>
          <Element name="info">
        <VeronaInfo/>
          </Element>
          <Element name="highlights">
              <Highlights/>
          </Element>
          <Element name="pricing">
        <Pricing/>
          </Element>
          <Element name="location">
        <Location/>
          </Element>
          <Element name="footer">
        <Footer/>
          </Element>
      </div>
    );
  }
}

export default App;
