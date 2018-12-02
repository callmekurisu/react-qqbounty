import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { MdThumbDown, MdThumbUp } from "react-icons/md";
class BountyContentComponent extends React.Component {
  render() {
    return (


      <Jumbotron fluid id='bounty-content-main'>
        <Container fluid>
          <div className='bounty-content-column flex-space-between'>
            <div> Reward: {this.props.bounty.amount}</div>
            <p>Expires: {this.props.bounty.expiration}</p>
          </div>
          <h2 className="display-4">Bounty Card Title {/*this.props.bounty.title*/}</h2>
          <hr className="my-2" />
          <p className="lead">{this.props.bounty.description}</p>


          <div className='bounty-content-footer'>
            <div className='bounty-content-flex-start'>
            </div>
            <div className='bounty-content-flex-end'>
            <Button className ="bounty-vote-button" size="small" color="black" onClick={() => this.vote(1)}>
									<MdThumbUp className='.material-icons.md-36' />
								</Button>
                <Button className ="bounty-vote-button" size="small" color="black" onClick={() => this.vote(1)}>
									<MdThumbDown className='.material-icons.md-36' />
								</Button>
              <div> Votes: {this.props.bounty.votes}</div>
            </div>
          </div>
          <hr className="my-2" />
        </Container>
      </Jumbotron>
    );
  }
}

export default BountyContentComponent;