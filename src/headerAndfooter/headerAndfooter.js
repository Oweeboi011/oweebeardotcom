import xstyles from './headerAndfooter.css';
import op from '../assets/icons/oweepenaranda.png';
import opw from '../assets/icons/oweepenaranda-W.png';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentLate from '@material-ui/icons/AssignmentLate';
import OfflineBolt from '@material-ui/icons/OfflineBolt';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import TouchApp from '@material-ui/icons/TouchApp';
import RecentActors from '@material-ui/icons/RecentActors';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

export class HeaderComponent extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };
  render() {
    var currWidth = window.innerWidth;
    const isMobs = currWidth <= 500;
    if (isMobs) {
      console.log(currWidth.toString() + 'px !important');
    }
    return (
      <div className="headerBar_1">
        <AppBar position="fixed" style={{ backgroundColor: 'rgba(16, 11, 30, 0.251)', padding: '0px,0px,0px,0px' }}>
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Open drawer">
              <img src={opw} className="oweeLogo" />
            </IconButton>
            <div style={{ marginLeft: "auto", marginRight: -12 }} />
            <div>
              <Tooltip title="Home" placement="left-start" >
                <IconButton color="inherit">
                  <span className="textMenufamily">Home</span>
                </IconButton>
              </Tooltip>
              <Tooltip title="Portfolio" placement="left-start">
                <IconButton color="inherit">
                  <span className="textMenufamily">Portfolio</span>
                </IconButton>
              </Tooltip>
              <Tooltip title="Projects" placement="left-start">
                <IconButton color="inherit">
                  <span className="textMenufamily">Projects</span>
                </IconButton>
              </Tooltip>
              <Tooltip title="Adventures" placement="left-start" className={xstyles.textMenufamily}>
                <IconButton color="inherit">
                  <span className="textMenufamily">Adventures</span>
                </IconButton>
              </Tooltip>
              <Tooltip title="Outdoor Adventures" placement="left-start" >
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>

            </div>
            {/* <div className={styles.sectionMobile}>
              <Tooltip title="More Item(s)" placement="left-start">
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </Tooltip>
            </div> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export class FooterComponent extends React.Component {
  render() {
    return (
      <div className="appbargrid">
        <Grid container justify="center" style={{ backgroundColor: 'rgba(16, 11, 30, 0.251)' }}>
          <Avatar alt="React" src={require("../assets/images/react.png")} className={xstyles.avatar}/>
          <Avatar alt="Materialize-UI" src={require("../assets/images/materialize-ui.png")} className={xstyles.bigAvatar}/>
        </Grid>

      </div>
    )
  }
}