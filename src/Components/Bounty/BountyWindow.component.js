import React from 'react';
import { BountiesClient } from '../../AxiosClients/qqBountyClient';
import BountyCard from './BountyCard.component';
import { connect } from 'react-redux';
import { getInitBounties } from '../../Redux/Actions/BountyWindow.actions';
import BountyModal from './BountyModal.component';

export class BountyWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        openModal: false,
        bounty: ""
    };
  }

  componentDidMount() {
    this.props.getInitBounties()
  }

  //open the bounty modal
  //I don't really wat to explain how this works...
  //Just trust me (^_^)
  openModal = (bounty) => (event) => {
    this.setState({
      openModal: true,
      bounty: bounty
    })
  }

  closeModal = () => {
    this.setState({
      openModal: false
    })
  }

  render() {
    let view = null
    if (this.state.openModal){
      view = <BountyModal open={true} bounty={this.state.bounty} close={this.closeModal}  />
    }

    return (
      <>
      {/* Why are all these cards connected??? */}
      {/* May need to curry this here! */}
        {view}
        <div id="bounty-window">
        <section className="bountyTable">
          { this.props.bounties.map(info=> (
            <BountyCard
              key={info.bountyId}
              bId={info.bountyId}
              info={info}
              openModal={this.openModal}
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