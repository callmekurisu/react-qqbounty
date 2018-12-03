import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Product from './Store/Product.component';
import PayPalCheckout from './Store/PayPalCheckout.component';

import * as storeActions from '../../Redux/Actions/Store.actions';

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

export class Store extends React.Component {
	state = {
		selectProductId: 0,
		price: 0,
		paypalToken: 'AccG4ZWB1WzCYkGtJrUawrJ4UTE_-NMYFkZS5OnLDX83DUuhPiy0zDoWw5n9BrWP_ZA3gYYHq7qNbUQR'
	};
	
	renderProducts = () => {
    if(this.props.products.length !== 0) {
      return this.props.products.map( product => {
				return <Product key={product.id} 
												product={product} 
												selectedId={this.state.selectProductId}
												selectProduct={this.handleProductSelect} />
      })
    } else return null;
	}

	getPayPalToken = () => {
		axios.get(SERVER_ADDRESS + '/products/paypalToken')
		.then(response => {
			this.setState({
				paypalToken: response.data.result
			})
		})
		.catch(error => {

		});
	}
	
	handleProductSelect = (pProductId, pPrice) => {
    this.setState({ 
			selectProductId: pProductId,
			price: pPrice
		});
	};
	
	renderPayButton = () => {
		if(this.props.login) {
			return	<PayPalCheckout token={this.state.paypalToken} price={this.state.price} productId={this.state.selectProductId} purchase={this.props.purchase} />
		} else return <div>Please login to purchase</div>
	}
	
  render() {
    let renderProducts = this.renderProducts();
		let payBtn = this.renderPayButton();
		return (
			<>
        <div id="store-wrapper">
					<h1 id="store-header">
						Limited Time Bundles!
					</h1>
					<div id="store-shelf">
						{renderProducts}
					</div>
					<div id="store-btn-wrapper">
						{payBtn}
						{/* <Button variant="contained" color="primary" id="purchase-btn"
							onClick={() => this.props.purchase(this.state.selectProductId)} >
							Buy Now
						</Button> */}
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