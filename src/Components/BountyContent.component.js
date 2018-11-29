import React from 'react';
// Expects a prop named Bounty from redux.
class BountyContentComponent extends React.Component {


      render() {
        return (
          <div id ="bounty-content-main">

              <p>{this.props.bounty.id}</p>
               <p>{this.props.bounty.description}</p>
               <p>{this.props.bounty.submitted}</p>
               <p>{this.props.bounty.amount}</p>
               <p>{this.props.bounty.votes}</p>
               <p>{this.props.bounty.timer}</p>
               <p>{this.props.bounty.status_id}</p>
               <p>{this.props.bounty.picture}</p>
          </div>
        );
      }
    }
    
    export default BountyContentComponent;