import React, { Component } from 'react';
import './AboutMe.css';
import { HeaderComponent } from '../headerAndfooter/headerAndfooter'


export class AboutMe extends Component {
  render() {
    return (
      <div className="AppAM">
        <header className="App-AM">
          <div class="content">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="mainTitleAM"></div>
            <span className="mainNameAM">ABOUT ME </span>
            {/* <span className="mainNameAM margintop-ne20AM">AND OUTDOOR LIFESTYLE </span> */}
            {/* </div> */}
            <span className="mainsubTitleAM">Web Developer | Creative Design | AMenture Cycling</span>
            <span className="mainsubNameAM">I'm a .NET/SharePoint developer based in Cavite, Philippines.</span>
            <span className="mainsubNameAM">I ride bikes and absolutely love AMenture cycling. </span>

            <a className="App-link" href="www.oweepenaranda.com" target="_blank" rel="noopener noreferrer">
              Learn more about me.
            </a>
          </div>
        </header>
      </div>
    );
  }
}

