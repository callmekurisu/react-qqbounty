import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';

export class MainContent extends React.Component {
  
	render() {
		return (
			<Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={this.state.snackbarOpen}
        autoHideDuration={5000}
        onClose={this.handleSnackbarClose}
        message={<h6 className="app-snackbar-message">{this.state.snackbarMessage}</h6>}
      />
		)
	}  
}

const mapStateToProps = (state) => {
  return {
    login: state.user.login
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)