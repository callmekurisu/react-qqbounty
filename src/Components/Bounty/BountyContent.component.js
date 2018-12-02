import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import time from '../../Include/Time';
import axios from 'axios';
const REACT_APP_SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;




class BountyContentComponent extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			votes: props.bounty.votes
		};
	}

  vote = (voteValue) => {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('JWT');
		axios.patch(`${REACT_APP_SERVER_ADDRESS}bounties/${this.props.bounty.bountyId}/vote?voteValue=${voteValue}`,
			).then(() => {
				this.setState({
					...this.state,
					votes: this.state.votes + voteValue
				})
			}).catch(err => {
				console.log(err);
			})
	}



  render() {
    return (


      <Jumbotron fluid id='bounty-content-main'>
        <Container fluid>
          <div className='bounty-content-column flex-space-between'>
            <div> Reward: {this.props.bounty.amount}</div>
            <p>Expiration: {time(this.props.bounty.expiration)}</p>
          </div>
          <h2 className="display-4">{this.props.bounty.title}</h2>
          <hr className="my-2" />
          <p className="lead">{this.props.bounty.description}</p>


          <div className='bounty-content-footer'>
            <div className='bounty-content-flex-start'>
            </div>
            <div className='bounty-content-flex-end'>
            <Button className ="bounty-vote-button" size="small" color="black" onClick={() => this.vote(1)}>
									<MdThumbUp className='.material-icons.md-36' />
								</Button>
                <Button className ="bounty-vote-button" size="small" color="black" onClick={() => this.vote(-1)}>
									<MdThumbDown className='.material-icons.md-36' />
								</Button>
              <div> Rating: {this.state.votes}</div>
            </div>
          </div>
          <hr className="my-2" />
        </Container>
      </Jumbotron>
    );
  }
}

export default BountyContentComponent;