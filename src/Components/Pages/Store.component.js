import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Product from './Store/Product.component';

import * as storeActions from '../../Redux/Actions/Store.actions';

import PaywallDialog from '../Paywall/PaywallDialog.component';
const QRCode = require('qrcode.react');

export class Store extends React.Component {
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


        <div id="store-wrapper">
					<h1 id="store-header">
						It ain't Falco
					</h1>
					<div id="store-shelf">
					<>
					{this.props.products.map( product => 
						<Product key={product.productId} 
							product={product} 
							selectedId={this.state.selectProductId}
							selectProduct={this.handleProductSelect} />
						)
					}
					</>					
					</div>
					<div id="store-btn-wrapper">
						{this.state.paid === true &&
						<Button variant="contained" color="primary" id="purchase-btn"
							onClick={() => this.props.purchase(this.state.selectProductId)} >
							Buy Now
						</Button>
						}
					</div>
				</div>
      </>
		)
	}
}

const mapStateToProps = (state) => {
  return {
		products: state.store.products
  }
}

const mapDispatchToProps = {
	purchase: storeActions.purchase
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)