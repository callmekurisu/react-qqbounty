import React from 'react';
import { connect } from 'react-redux';
import WelcomeBanner from './WelcomeBanner.component';
import PopularBountyWindow from './Bounty/BountyWindows/PopularBountyWindow.component';
import NewBountyWindow from './Bounty/BountyWindows/NewBountyWindow.component';
import ExpireSoonBountyWindow from './Bounty/BountyWindows/ExpireSoonBountyWindow.component';

import BountyModal from './Bounty/BountyModal.component';
import AppSnackbar from './Commons/AppSnackbar.component';
export class MainContent extends React.Component {
  
	render() {
		return (
			<div className="main-content-wrapper">
				<WelcomeBanner />
				
				<PopularBountyWindow />
				<NewBountyWindow />
				<ExpireSoonBountyWindow />

				<BountyModal  />
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