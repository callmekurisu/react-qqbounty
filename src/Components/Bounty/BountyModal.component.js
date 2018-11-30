import React from 'react';

import { connect } from 'react-redux';
import * as bountyActions from '../../Redux/Actions/Bounty.actions';

import BountyContent from './BountyContent.component';
import BountyAnswers from './BountyAnswers.component';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class BountyModal extends React.Component {

  renderDialogContent = () => {
    if(this.props.modalBounty !== null) {
      return  <>
                <BountyContent bounty={this.props.modalBounty}/>
                <BountyAnswers bounty={this.props.modalBounty}/>
              </>
    }
    else return null
  }

  render() {
    let renderDialogContent = this.renderDialogContent();
    return (
      <div>
        <Dialog
          open={this.props.modalOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.closeModal}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          fullWidth
          maxWidth="lg"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Bounty Id:"}
          </DialogTitle>
          <DialogContent>
            <div id="bounty-modal-content-container">
              {renderDialogContent}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalOpen:      state.bounty.modalOpen,
    modalBounty:    state.bounty.modalBounty,
    modalBountyId:  state.bounty.modalBountyId
  }
}

const mapDispatchToProps = {
  closeModal: bountyActions.closeBountyModal
}

export default connect(mapStateToProps, mapDispatchToProps)(BountyModal)