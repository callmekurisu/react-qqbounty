import React from 'react';
// Expects a prop named Bounty from redux.
class BountyContentComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          bounty:
            {
              id: 1,
              description: 'What is the square root of 4',
              submitted: "4/23/21",
              amount: 100,
              votes: 7,
              timer: 100,
              status_id: 1,
              picture: "hi"

            }
        }
      }


      render() {
        return (
          <div id ="bounty-content-main">

               <p>Bounty:{this.state.bounty.id}</p>
               <p>Description:{this.state.bounty.description}</p>
               <p>Time Submitted:{this.state.bounty.submitted}</p>
               <p>Amount:{this.state.bounty.amount}</p>
               <p>Votes:{this.state.bounty.votes}</p>
               <p>Timer:{this.state.bounty.timer}</p>
               <p>Status?:{this.state.bounty.status_id}</p>
               <p>Picture:{this.state.bounty.picture}</p>

               {/* <p>{this.props.bounty.id}</p>
               <p>{this.props.bounty.description}</p>
               <p>{this.props.bounty.submitted}</p>
               <p>{this.props.bounty.amount}</p>
               <p>{this.props.bounty.votes}</p>
               <p>{this.props.bounty.timer}</p>
               <p>{this.props.bounty.status_id}</p>
               <p>{this.props.bounty.picture}</p> */}
          </div>
        );
      }
    }
    
    export default BountyContentComponent;