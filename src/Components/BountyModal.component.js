import React from 'react';

import BountyContent from './BountyContent.component';
import BountyAnswers from './BountyAnswers.component';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class BountyModal extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Click on a Bounty</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
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
              <BountyContent/>
              <BountyAnswers/>
              </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default BountyModal;