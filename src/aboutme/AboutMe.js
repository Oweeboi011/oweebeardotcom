import React, { Component } from 'react';
import './AboutMe.css';
import { HeaderComponent } from '../headerAndfooter/headerAndfooter'


export class AboutMe extends Component {
  render() {
    return (
      <div className="AppAM">
        <header className="App-AM">
          <div className="content">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="mainTitleAM"></div>
            <span className="mainNameAM">ABOUT ME </span>
            {/* <span className="mainNameAM margintop-ne20AM">AND OUTDOOR LIFESTYLE </span> */}
            {/* </div> */}
            <span className="mainsubTitleAM">Work Experience</span>
            <span className="mainsubNameAM">2017 - PRESENT: Tech Architect Delivery Associate Manager | Accenture Inc.</span>
            <span className="mainsubNameAM">2014 - 2017: Tech Architect Delivery Team Lead | Accenture Inc.</span>
            <span className="mainsubNameAM">2012 - 2014: Senior Software Engineer | Accenture Inc.</span>
            <span className="mainsubNameAM">2010 - 2012: Software Engineer | Accenture Inc.</span>
            <span className="mainsubTitleAM">Skillset</span>
            <span className="mainsubNameAM">* Office O365 / SharePoint Server</span>
            <span className="mainsubNameAM">* C#</span>
            <span className="mainsubNameAM">* MS SQL Server</span>
            <span className="mainsubNameAM">* TypeScript</span>
            <span className="mainsubNameAM">* JavaScript</span>
            <span className="mainsubNameAM">* NodeJS</span>

            <span className="mainsubTitleAM">Education</span>
            <span className="mainsubNameAM">2005 - 2009: Central Colleges of the Philippines | Bachelor of Science Major in Information Technology </span>
          </div>
        </header>
      </div>
    );
  }
}


