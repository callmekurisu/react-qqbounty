import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';

import * as userActions from '../../Redux/Actions/User.actions';

import Login from './Login.component';
import Register from './Register.component';

const styles = {
  grow: {
    flexGrow: 1,
  }
};

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElement: null,
      loginDialogOpen: false,
      registerDialogOpen: false
    };
  }

  handleMenu = event => {
    this.setState({ anchorElement: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorElement: null });
  };

  handleToggleLoginDialog = () => {
    this.setState({ 
      anchorElement: null,
      loginDialogOpen: !this.state.loginDialogOpen
    });
  };

  handleToggleRegisterDialog = () => {
    this.setState({ 
      anchorElement: null,
      registerDialogOpen: !this.state.registerDialogOpen
    });
  };

  handleLogout = () => {
    this.setState({ anchorElement: null });
    this.props.logoutAction();
  };
  
  handleRenderMenu = () => {
    const isOpen = Boolean(this.state.anchorElement);
    if(!this.props.login) {
      return <div>
              <IconButton
                aria-owns={isOpen ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorElement}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isOpen}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleToggleRegisterDialog}>Register</MenuItem>
                <MenuItem onClick={this.handleToggleLoginDialog}>Login</MenuItem>
              </Menu>
            </div>;
    } else {
      return <div>
              <IconButton
                aria-owns={isOpen ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorElement}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isOpen}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
              </Menu>
            </div>;
    }
  }

  handleRenderDialog = () => {
    if(this.state.loginDialogOpen) {
      return <Login open={true} close={this.handleToggleLoginDialog} />
    } else if(this.state.registerDialogOpen) {
      return <Register open={true} close={this.handleToggleRegisterDialog} />
    }
  }

  render() {
    const { classes } = this.props;
    let renderDropdown = this.handleRenderMenu();
    let renderDialog = this.handleRenderDialog();
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              qqBounty
            </Typography>
            {renderDropdown}
          </Toolbar>
        </AppBar>
        {renderDialog}
      </>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    login: state.user.login
  }
}

const mapDispatchToProps = {
  logoutAction: userActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBar));