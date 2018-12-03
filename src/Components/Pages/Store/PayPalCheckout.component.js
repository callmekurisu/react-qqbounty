import React from 'react';

import PaypalExpressBtn from 'react-paypal-express-checkout';

// const MERCHANT_ID  = process.env.REACT_APP_MECHANT_ID;
const CLIENT_ID   = process.env.REACT_APP_CLIENT_ID;

class PayPalCheckout extends React.Component {
  render() {
    const onSuccess = (payment) => {
      // 1, 2, and ... Poof! You made it, everything's fine and dandy!
      this.props.purchase(this.props.productId);
      console.log("Payment successful!", payment);
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
		}

		const onCancel = (data) => {
			}

		const onError = (err) => {
		}
    const client = {
        sandbox:    CLIENT_ID
    }   
    return (
      <PaypalExpressBtn client={client} currency="USD" total={this.props.price} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />  
    );
  }
} 

export default PayPalCheckout