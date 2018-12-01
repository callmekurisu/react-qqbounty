import React from 'react';
import { connect } from 'react-redux';
import WelcomeBanner from './Commons/WelcomeBanner.component';
import Home from './Pages/Home.component';
import Store from './Pages/Store.component';
import UserProfile from './Pages/UserProfile.component';

import BountyModal from './Bounty/BountyModal.component';
import AppSnackbar from './Commons/AppSnackbar.component';

import * as storeActions from '../Redux/Actions/Store.actions';

export class MainContent extends React.Component {

	componentDidMount() {
		// this.props.setUpStore();
	}

	renderPage = () => {
		if(this.props.page === 'home') {
			return 	<Home />
		}
		else if(this.props.page === 'store') {
			return 	<Store />			
		}
		else if(this.props.page === 'user_profile') {
			return 	<UserProfile />			
		}	
	}

	renderBanner = () => {
		if(!this.props.login)
			return <WelcomeBanner />
		else return null
	}

	render() {
		let sRenderPage 	= this.renderPage();
		let sRenderBanner = this.renderBanner();

		return (
			<div className="main-content-wrapper">
				{sRenderBanner}
				{sRenderPage}
				<BountyModal  />
				<AppSnackbar />
			</div>
		)
	}  
}

const mapStateToProps = (state) => {
  return {
		page: 	state.mainContent.page,
		login: 	state.user.login
  }
}

const mapDispatchToProps = {
	setUpStore: storeActions.setUp
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)