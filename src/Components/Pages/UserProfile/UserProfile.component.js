import React from 'react';
import { UsersClient } from '../../../AxiosClients/qqBountyClient';
import UserBountyWindow from '../../Bounty/BountyWindows/UserBountyWindow.component';

import { connect } from 'react-redux';
import * as storeActions from '../../../Redux/Actions/Bounty.actions';
export class UserProfile extends React.PureComponent {

  componentDidMount() {
    this.props.getBounties();
  }
  render() {
		return (
			<>
      <div className="container">
        <div className="row">
          <div className="col-md-6 img">
            <img className="profile-image img-rounded" src="https://i.kym-cdn.com/photos/images/newsfeed/000/096/044/trollface.jpg?1296494117"  alt="" />
           </div>
       <div className="col-md-6 profile-details">
          <blockquote>
          <h2>What's up {this.props.user.username} !</h2>
          <h3>{this.props.user.email}</h3>
          <h3>QQTokens: {this.props.user.walletBalance}</h3>
          </blockquote>

         </div>
       </div>
     </div>

        <UserBountyWindow />
      </>
		)
	} 
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
    
  }
}

const mapDispatchToProps = {
  getBounties: storeActions.getUserBounties
}



export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)