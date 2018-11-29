import React from 'react';
import { BountiesClient } from '../AxiosClients/qqBountyClient';
import BountyCard from './BountyCard.component';
import { connect } from 'react-redux';
import { getInitBounties } from '../Redux/Actions/BountyWindow.actions';

export class BountyWindow extends React.Component {
 

  componentDidMount() {
    this.props.getInitBounties()
  }

  //open the bounty modal
  //I don't really want to explain how this works...
  //Just trust me (^_^)
  bountyModal = (bId) => (event) => {
    console.log(bId);//verified bounty id can be fetched from preview card!
  }

  render() {
    return (
      <>
      {/* Why are all these cards connected??? */}
      {/* May need to curry this here! */}
      <div id="window">
      <section className="bountyTable">
     { this.props.bounties.map(info=> (
       <BountyCard
          key={info.bountyId}
          bId={info.bountyId}
          info={info}
          bountyModal={this.bountyModal}
       />
     ))}
      </section>
      </div>
     </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bounties: state.bountyWindow.bounties
  }
}

const mapDispatchToProps = {
  getInitBounties
}

export default connect(mapStateToProps, mapDispatchToProps)(BountyWindow)
