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

const styles = theme => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  root: {
    width: '100%',
   },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});


export class HeaderComponent extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  scroll2target = (idStr) => {
    this.setState({ mobileMoreAnchorEl: null });
  };

    render(){
      const { anchorEl, mobileMoreAnchorEl } = this.state;
      const { classes } = this.props;
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        </Menu>
      );
  
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <Badge badgeContent={11} color="secondary">
                <OfflineBolt />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={this.handleProfileMenuOpen}>
            <IconButton color="inherit">
              <OfflineBolt />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
  
  return (
     <div className={styles.root}>
        <AppBar position="fixed" style={{backgroundColor: 'rgba(16, 11, 30, 0.251)'}}>
          <Toolbar>
            <IconButton className={styles.menuButton} color="inherit" aria-label="Open drawer">
            {/* <img src={op} className={xstyles.oweeLogo} />  */}
            <img src={opw} className="oweeLogo" /> 
            
            </IconButton>              
            <div className={styles.grow} style={{ marginLeft: "auto", marginRight: -12 }}/>
            <div className={xstyles.textMenufamily}>
            <Tooltip title="Professional Credentials" placement="left-start">
              <IconButton color="inherit">
               <span className={xstyles.textMenufamily}>Home</span>
              </IconButton> 
              </Tooltip>
            <Tooltip title="Professional Credentials" placement="left-start">
              <IconButton color="inherit">
               Portfolio
              </IconButton> 
              </Tooltip>
              <Tooltip title="Development Projects" placement="left-start">
              <IconButton color="inherit" onClick="">
              About
              </IconButton>
              </Tooltip>
              <Tooltip title="Mobile Apps" placement="left-start">
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit">
                Adventures
              </IconButton>
              </Tooltip>
              <Tooltip title="Outdoor Adventures" placement="left-start">
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit">
                <NotificationsIcon />
              </IconButton>
              </Tooltip>
              
            </div>
            <div className={styles.sectionMobile}>
            <Tooltip title="More Item(s)" placement="left-start">
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
}
}

export class FooterComponent extends React.Component {
  render(){
    return(
      <div className="appbargrid">            
        <Grid container justify="center" alignItems="center" style={{backgroundColor: 'rgba(16, 11, 30, 0.251)'}}>
        <Avatar alt="React" src={require("../assets/images/react.png")} className={styles.avatar} alignItems="center" />
        <Avatar alt="Materialize-UI" src={require("../assets/images/materialize-ui.png")} className={styles.bigAvatar} alignItems="center"  />
      </Grid>

      </div>
    )
}
}