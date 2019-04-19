import React, { Component } from 'react';
import './Projects.css';
import { HeaderComponent, FooterComponent } from '../headerAndfooter/headerAndfooter'


export class Projects extends Component {
  render() {
    return (
      <div className="AppProj">
        <HeaderComponent></HeaderComponent>
        <header className="App-Project">
          <div class="content">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="mainTitleProj"></div>
            <span className="mainNameProj">PROJECTS </span>
            <span className="mainNameProj margintop-ne20Proj">AND PORTFOLIOS </span>
            {/* </div> */}
            <span className="mainsubTitleProj">Azure DevOps | Github | Google Cloud</span>
            <span className="mainsubNameProj">I'm a .NET/SharePoint developer based in Cavite, Philippines.</span>
            <span className="mainsubNameProj">I ride bikes and absolutely love adventure cycling. </span>

            <a className="App-link" href="www.oweepenaranda.com" target="_blank" rel="noopener noreferrer">
              Learn more about me.
            </a>
          </div>
        </header>
      </div>
    );
  }
}

