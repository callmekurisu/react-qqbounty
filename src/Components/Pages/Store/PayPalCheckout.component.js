import React from 'react';

import PaypalExpressBtn from 'react-paypal-express-checkout';

// const MERCHANT_ID  = process.env.REACT_APP_MECHANT_ID;
// const CLIENT_ID   = process.env.REACT_APP_CLIENT_ID;

class PayPalCheckout extends React.Component {
  render() {
    let onSuccess = (payment) => {
      this.props.purchase(this.props.productId);
    }

		let onCancel = (data) => {
    }

		let onError = (err) => {
    }
    
    let client = {
      sandbox:    this.props.token
    }   
    return (
      <PaypalExpressBtn client={client} currency="USD" total={this.props.price} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />  
    );
  }
} 

export default PayPalCheckout