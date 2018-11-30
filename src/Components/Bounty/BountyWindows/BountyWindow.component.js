import React from 'react';
import BountyCard from './BountyCard/BountyCard.component';
import { connect } from 'react-redux';

export class BountyWindow extends React.Component {

  render() {
    return (
      <>
        <div id="bounty-window">
        <div class="bounty-window-fade-left"></div>
          <div className="bounty-window">
            { this.props.bounties.map(bounty => (
              <BountyCard
                key={bounty.bountyId}
                bId={bounty.bountyId}
                bounty={bounty}
              />
            ))}
          </div>
          <div class="bounty-window-fade-right"></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(BountyWindow)