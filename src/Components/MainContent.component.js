import React from 'react';
import { connect } from 'react-redux';

export class MainContent extends React.Component {
  
	render() {
		return (
			<div className="main-content-wrapper">

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