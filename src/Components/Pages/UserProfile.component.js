import React from 'react';
import { UsersClient } from '../../AxiosClients/qqBountyClient';

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

  UsersClient.get()
      .then((response) => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })
}
  render() {
		return (
			<>
      <div className="container">
        <div class="row">
          <div className="col-md-6 img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzOpl3-kqfNbPcA_u_qEZcSuvu5Je4Ce_FkTMMjxhB-J1wWin-Q"  alt="" className="img-rounded"/>
           </div>
       <div className="col-md-6 profile-details">
          <blockquote>
          <h5>username</h5>
          <h4>email</h4>
          </blockquote>

         </div>
       </div>
     </div>
      </>
		)
	} 
}

export default UserProfile