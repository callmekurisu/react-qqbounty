import React from 'react';
import UserBountyWindow from '../../Bounty/BountyWindows/UserBountyWindow.component';

import { connect } from 'react-redux';
import * as bountyActions from '../../../Redux/Actions/Bounty.actions';

import USER_IMG_DEFAULT from '../../../Assets/images/avatar-default.png';

export class UserProfile extends React.PureComponent {

  componentDidMount() {
    this.props.getUserBounties();
  }

  renderUserImage = () => {
    if(this.props.user.picture !== "") {
      return this.props.user.picture;
    } else return USER_IMG_DEFAULT;
  }

  render() {
    let imgSrc = this.renderUserImage();
		return (
			<>
        <div id="user-profile-wrapper">
          <div className="row">
            <div className="col-md-2 img">
              <div id="user-profile-img-wrapper">
                <img className="profile-image img-rounded" src={imgSrc} alt="user_profile_image" />
              </div>
            </div>
            <div className="col-md-10 profile-details">
                <h2>What's up {this.props.user.username} !</h2>
                <h3>{this.props.user.email}</h3>
                <h3>QQTokens: {this.props.user.walletBalance}</h3>
            </div>
          </div>
        </div>
        <UserBountyWindow bounties={this.props.userBounties} />
      </>
		)
	} 
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    userBounties: state.bounty.userBounties
  }
}

const mapDispatchToProps = {
  getUserBounties: bountyActions.getUserBounties
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)