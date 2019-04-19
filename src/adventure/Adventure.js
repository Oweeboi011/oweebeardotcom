import React, { Component } from 'react';
import './Adventure.css';
import { HeaderComponent, FooterComponent } from '../headerAndfooter/headerAndfooter'


export class Adventure extends Component {
  render() {
    return (
      <div className="AppAdv">
        <HeaderComponent></HeaderComponent>
        <header className="App-Adv">
          <div class="content">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="mainTitleAdv"></div>
            <span className="mainNameAdv">ADVENTURE </span>
            <span className="mainNameAdv margintop-ne20Adv">AND OUTDOOR LIFESTYLE </span>
            {/* </div> */}
            <span className="mainsubTitleAdv">Web Developer | Creative Design | Adventure Cycling</span>
            <span className="mainsubNameAdv">I'm a .NET/SharePoint developer based in Cavite, Philippines.</span>
            <span className="mainsubNameAdv">I ride bikes and absolutely love adventure cycling. </span>

            <a className="App-link" href="www.oweepenaranda.com" target="_blank" rel="noopener noreferrer">
              Learn more about me.
            </a>
          </div>
        </header>
      </div>
    );
  }
}

