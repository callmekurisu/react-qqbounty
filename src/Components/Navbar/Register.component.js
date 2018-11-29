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

export class Register extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			email: "",
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
		if (e.target.id === 'username-input') {
			this.setState({ username: e.target.value });
		} else if (e.target.id === 'email-input') {
			this.setState({ email: e.target.value });
		} else if (e.target.id === 'password-input') {
			this.setState({ password: e.target.value });
		} 
  }
	
	handleRegisterClick = () => {
		this.props.submitRegister(this.state.email, this.state.username, this.state.password);
		this.props.close();
	}
	
	render() {
		console.log("thing")
		return (
			<div className="register-wrapper">
        <Dialog
					open={this.props.open}
					onClose={this.props.close}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register</DialogTitle>
          <DialogContent>
						<TextField
							id="email-input"
							label="Email"
							className="navbar-dialog-input navbar-input-name-right"
							type="email"
							margin="normal"
							fullWidth
							onChange={this.handleInputChange}
						/>
						<TextField
							id="username-input"
							label="Username"
							className="navbar-dialog-input navbar-input-name-left"
							type="name"
							margin="normal"
							fullWidth
							onChange={this.handleInputChange}
						/>
						<TextField
							id="password-input"
							label="Password"
							className="navbar-dialog-input navbar-input-name-left"
							type="password"
							fullWidth
							margin="normal"
							onChange={this.handleInputChange} 
						/>
						<Button onClick={this.handleRegisterClick} variant="contained" color="primary" id="register-btn">
							Register
						</Button>
          </DialogContent>
        </Dialog>
			</div>
		)
	}  
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = {
	submitRegister: userActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)