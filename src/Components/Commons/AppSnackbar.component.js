import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
import * as snackbarActions from '../../Redux/Actions/Snackbar.actions';

export class AppSnackbar extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      snackbarOpen: false,
      message: ''
		};
  }
  
  handleNewMessage = (pMessage) => {
    this.setState({
      snackbarOpen: true,
      message: pMessage
    });
  };

  handleSnackbarOpen = () => {
    this.setState({
      snackbarOpen: true
    });
  };

  handleSnackbarClose = () => {
    this.setState({
      snackbarOpen: false 
    });
  };

	render() {
    if(this.props.message !== this.state.message) {
      this.handleNewMessage(this.props.message);
    }
		return (
			<Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={this.state.snackbarOpen}
        autoHideDuration={3000}
        onClose={this.handleSnackbarClose}
        message={<h6 className="app-snackbar-message">{this.props.message}</h6>}
      />
		)
	}  
}

const mapStateToProps = (state) => {
  return {
    message: state.snackbar.message
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AppSnackbar)