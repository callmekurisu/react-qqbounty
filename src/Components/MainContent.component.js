import React from 'react';
import { connect } from 'react-redux';
import WelcomeBanner from './Commons/WelcomeBanner.component';
import Home from './Pages/Home.component';
import Store from './Pages/Store.component';
import Dashboard from './Pages/Dashboard.component';

import UserProfile from './Pages/UserProfile/UserProfile.component';

import SubmitBounty from './Pages/SubmitBounty.component';
import AdvertisementText from './Commons/AdvertisementText.component';

import BountyModal from './Bounty/BountyModal.component';
import AppSnackbar from './Commons/AppSnackbar.component';

import * as storeActions from '../Redux/Actions/Store.actions';
import * as bountyActions from '../Redux/Actions/Bounty.actions';

export class MainContent extends React.Component {

	componentDidMount() {
	
		this.props.getHighPay();
		this.props.getNew();
		this.props.getPopular();
		this.props.getOld();
	}

	renderPage = () => {
		if(this.props.page === 'home') {
			return 	<Home />
		}
		else if(this.props.page === 'store') {
			this.props.setUpStore()
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
	setUpStore: storeActions.setUp,
	getPopular: bountyActions.getPopularBounties,
	getOld: 	bountyActions.getOldBounties,
	getNew:		bountyActions.getNewBounties,
	getHighPay: bountyActions.getHighPayBounties

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)