import React from 'react';
import Product from './Store/Product.component';
import PaywallDialog from '../Paywall/PaywallDialog.component';

// const QRCode = require('qrcode.react');

export class Payment extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectProductId: 0,
      amount: 0,
      invoice: '',
      open: false,
      paid: false
      };
  }
  handleProductSelect = (pProductId) => (event) =>{
    this.setState({ selectProductId: pProductId });
    pProductId === 1 ? this.state.amount = 1 :
    pProductId === 2 ? this.state.amount = 10 :
    this.state.amount = 20
    axios.get(`https://gotcode.hopto.org/invoice/${this.state.amount}`)
      .then((response) => {
        this.setState({
      ...this.state,
      invoice: response.data.invoice,
      open: true
    })
      })
      .catch(err => {
        console.log(err);
    })
    setTimeout(()=>{
    axios.get(`https://gotcode.hopto.org/listen/${this.state.invoice}`)
      .then((response) => {
    if(response.status === 200) {
      this.setState({
        ...this.state,
        paid: true,
        open: false 
      }) 
    } else {
    this.setState({
      ...this.state,
      paid: false,
      open: false 
    })
  }
      })
      .catch(err => {
        console.log(err);
      })

    }, 5000)
    
  };
  //close paywall dialog
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
		
		return (
			<>
        <PaywallDialog
        invoice={this.state.invoice}
        open={this.state.open}
        amount={this.state.amount}
        close={this.handleClose}
        pay={this.sendPayment}/>

						{/* {this.state.paid === true &&

            } */}
      </>
    )
  }

}

export default Payment;