import React from 'react';
import { connect } from 'react-redux';
import BountyWindow from './BountyWindow.component';

export class ExpiredBountyWindow extends React.Component {
  
	render() {
		return (
      <>
        <div id="expire-soon-bounty-window-wrapper" className="bounty-window-wrapper">
          <h1 id="expire-soon-bounty-window-title">Expired</h1>
          <BountyWindow bounties={this.props.bounties} />
        </div>
      </>
		)
	}  
}

const mapStateToProps = (state) => {
  return {
    bounties: state.bounty.bounties
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpiredBountyWindow)