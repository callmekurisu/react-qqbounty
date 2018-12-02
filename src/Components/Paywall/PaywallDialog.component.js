import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const QRCode = require('qrcode.react');
class PaywallDialog extends React.Component {
  
  render() {
    return (
      <div>
        
        <Dialog
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">QQBounty LND Invoice</DialogTitle>
          <DialogContent>
            <DialogContentText>Amount: {this.props.amount} SATS</DialogContentText>
          <QRCode value={this.props.invoice} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close} color="primary">
                Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default PaywallDialog;