import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';

import * as userActions from '../../Redux/Actions/User.actions';

export class Login extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			username: "",
			password: "",
			showPassword: false
    };
	}

	stopDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
	}
	
	handleClickShowPassword = (e) => {
    this.setState(state => ({ showPassword: !state.showPassword }));
	};

	handleInputChange = (e) => {
		if (e.target.id === 'outlined-adornment-username') {
			this.setState({ username: e.target.value });
		} else if (e.target.id === 'outlined-adornment-password') {
      this.setState({ password: e.target.value });
    }
	}
	
	handleLoginClick = () => {
		this.props.submitLogin(this.state.username, this.state.password);
		this.props.close();
	}
	
	render() {
		return (
			<div className="login-wrapper">
        <Dialog
					open={this.props.open}
					onClose={this.props.close}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <TextField
							id="outlined-adornment-username"
							className="navbar-input"
							variant="outlined"
							label="username"
							value={this.state.username}
							onClick={this.stopDefault}
							onChange={this.handleInputChange}
						/>
						<TextField
							id="outlined-adornment-password"
							className="navbar-input"
							variant="outlined"
							type={this.state.showPassword ? 'text' : 'password'}
							label="password"
							value={this.state.password}
							onClick={this.stopDefault}
							onChange={this.handleInputChange}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											className="show-password-btn"
											aria-label="Toggle password visibility"
											onClick={this.handleClickShowPassword}
										>
											{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<Button onClick={this.handleLoginClick} variant="contained" color="primary" id="login-btn">
							Login
						</Button>
          </DialogContent>
        </Dialog>
			</div>
		)
	}  
}

const mapStateToProps = (state) => {
  return {
    login: state.user.login
  }
}

const mapDispatchToProps = {
	submitLogin: userActions.login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)