import React from 'react';
import { UsersClient } from '../../../AxiosClients/qqBountyClient';
import OpenBountyWindow from '../../Bounty/BountyWindows/OpenBountyWindow.component';
import ExpiredBountyWindow from '../../Bounty/BountyWindows/ExpiredBountiesWindow.component';
import axios from 'axios';
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;
let jwtToken = localStorage.getItem('JWT');
export class UserProfile extends React.Component {
constructor(props){
  super(props);
  this.state = {
    username: '',
    email: '',
    walletBalance: ''
  }
}
 

componentDidMount() {
  axios.get(`${SERVER_ADDRESS}/users/info`,
      {headers: {
        'Authorization': `Bearer ${jwtToken}`
      }})
      .then(response => {
        console.log(response)
        this.setState({
          ...this.state,
          username: response.data.result.user.username,
          email: response.data.result.user.email,
          walletBalance: response.data.result.user.walletBalance
        })
        
      })
    }

  render() {
		return (
			<>
      <div className="container">
        <div className="row">
          <div className="col-md-6 img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzOpl3-kqfNbPcA_u_qEZcSuvu5Je4Ce_FkTMMjxhB-J1wWin-Q"  alt="" className="img-rounded"/>
           </div>
       <div className="col-md-6 profile-details">
          <blockquote>
          <h2>{this.state.username}</h2>
          <h3>{this.state.email}</h3>
          <h3>QQTokens: {this.state.walletBalance}</h3>
          </blockquote>

         </div>
       </div>
     </div>

        <OpenBountyWindow />
        <ExpiredBountyWindow/>
      </>
		)
	} 
}

export default UserProfile