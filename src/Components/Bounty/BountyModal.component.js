import React from 'react';
import { connect } from 'react-redux';
import BountyContent from './BountyContent.component';
import BountyAnswers from './BountyAnswers.component';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import * as bountyActions from '../../Redux/Actions/Bounty.actions';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class BountyModal extends React.Component {

  renderDialogContent = () => {
    console.log(this.props.modalBounty)
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
          className ="Dialog-main"
        >
          
          <DialogTitle id="alert-dialog-slide-title"  className = 'dialouge-title'>{" "}
          </DialogTitle>
          <DialogContent  className = 'dialouge-body'>
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