import React from 'react';
import { connect } from 'react-redux';
import WelcomeBanner from './Commons/WelcomeBanner.component';
import Home from './Pages/Home.component';
import Store from './Pages/Store.component';
import Dashboard from './Pages/Dashboard.component';
<<<<<<< HEAD
import UserProfile from './Pages/UserProfile/UserProfile.component';
=======
import UserProfile from './Pages/UserProfile.component';
import SubmitBounty from './Pages/SubmitBounty.component';
import AdvertisementText from './Commons/AdvertisementText.component';
>>>>>>> 9c44f7ef7b2fd6cd6e28cf8f70fca904e61fbb3f

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
		else if(this.props.page === 'dashboard') {
			return 	<Dashboard />			
		}	
		else if(this.props.page === 'submit_bounty') {
			return 	<SubmitBounty />			
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
				<BountyModal />
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