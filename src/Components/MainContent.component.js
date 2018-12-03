import React from 'react';
import { connect } from 'react-redux';
import Home from './Pages/Home.component';
import Store from './Pages/Store.component';
import Dashboard from './Pages/Dashboard.component';

import UserProfile from './Pages/UserProfile/UserProfile.component';

import SubmitBounty from './Pages/SubmitBounty.component';

import BountyModal from './Bounty/BountyModal.component';
import AppSnackbar from './Commons/AppSnackbar.component';

import * as storeActions from '../Redux/Actions/Store.actions';
import * as bountyActions from '../Redux/Actions/Bounty.actions';
import * as userActions from '../Redux/Actions/User.actions';

export class MainContent extends React.Component {

	componentDidMount() {
		this.props.setupUser();
		this.props.getHighPay();
		this.props.getNew();
		this.props.getPopular();
		this.props.getOld();
		this.props.setUpStore();
	}

	renderPage = () => {
		if(this.props.page === 'home') {
			return 	<Home login={this.props.login} />
		}
		else if(this.props.page === 'store') {
			this.props.setUpStore()
			return 	<Store login={this.props.login} />			
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

	render() {
		let sRenderPage 	= this.renderPage();

		return (
			<div className="main-content-wrapper">
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
	getOld: 		bountyActions.getOldBounties,
	getNew:			bountyActions.getNewBounties,
	getHighPay: bountyActions.getHighPayBounties,
	setupUser:	userActions.setupUser
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)