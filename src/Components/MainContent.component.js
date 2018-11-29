import React from 'react';
import { connect } from 'react-redux';
import AppSnackbar from './Commons/AppSnackbar.component';
export class MainContent extends React.Component {
  
	render() {
		return (
			<div className="main-content-wrapper">

				<AppSnackbar />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)