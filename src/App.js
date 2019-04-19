import React, { Component } from 'react';
import logo from './logo.svg';
import fb from './assets/icons/facebook.png'
import ig from './assets/icons/instagram.png'
import lin from './assets/icons/linkedin.png'
import st from './assets/icons/strava.png'
import gh from './assets/icons/github.png'
import fl from './assets/icons/flickr.png'
import ex from './assets/icons/expo.png'
import './App.css';
import { HeaderComponent, FooterComponent } from './headerAndfooter/headerAndfooter'
// import { CarouselMenu } from './carouselMenu/carouselMenu'
import { Projects } from './projects/Projects'
import { Adventure } from './adventure/Adventure'
import { AboutMe } from './aboutme/AboutMe'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <header className="App-header">
          <div class="content">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="mainTitle"></div>

            {/* <CarouselMenu></CarouselMenu> */}
            
            <span className="mainName">OWEE </span>
            <span className="mainName margintop-ne20">PEÑARANDA </span>
            {/* </div> */}
            <span className="mainsubTitle">Web Developer | Creative Design | Adventure Cycling</span>
            <span className="mainsubName">I'm a .NET/SharePoint developer based in Cavite, Philippines.</span>
            <span className="mainsubName">I ride bikes and absolutely love adventure cycling. </span>
            <div className="iconblock">
              <a target="_blank" href="https://www.linkedin.com/in/cromwel-penaranda-585b71151/"><img src={lin} className="thumblogo" alt="logo" title="LinkedIn" /></a>
              <a target="_blank" href="https://github.com/Oweeboi011"><img src={gh} className="thumblogo" alt="logo" title="GitHub" /></a>
              <a target="_blank" href="https://expo.io/@oweebear"><img src={ex} className="thumblogo" alt="logo" title="Expo" /></a>
              <a target="_blank" href="https://www.flickr.com/photos/oweeboi011/"><img src={fl} className="thumblogo" alt="logo" title="Flickr" /></a>
              <a target="_blank" href="https://web.facebook.com/cromwel.penaranda"><img src={fb} className="thumblogo" alt="logo" title="Facebook" /></a>
              <a target="_blank" href="https://www.instagram.com/renegadeoweeboi/?hl=en"><img src={ig} className="thumblogo" alt="logo" title="Instram" /></a>
              <a target="_blank" href="https://www.strava.com/athletes/11888467"><img src={st} className="thumblogo" alt="logo" title="Strava" /></a>
            </div>
            {/* <a className="App-link" href="www.oweepenaranda.com" target="_blank" rel="noopener noreferrer">
              Learn more about me.
            </a> */}
          </div>
        </header>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Adventure></Adventure>
        <Copyryt></Copyryt>
        <FooterComponent></FooterComponent>
      </div>

    );
  }
}
class Copyryt extends Component {
  render() {
    return (
      <span className="copyryt">© 2019 OWEE PENARANDA</span>
    )
  }
}

export default App;
