import React from 'react';
import { connect } from 'react-redux';
import BountyWindow from './BountyWindow.component';

export class OpenBountyWindow extends React.Component {
  
	render() {
		return (
      <>
        <div id="new-bounty-window-wrapper" className="bounty-window-wrapper">
          <h1 id="new-bounty-window-title">Open</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(OpenBountyWindow)