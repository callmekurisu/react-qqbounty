import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import Product from './Store/Product.component';
import PayPalCheckout from './Store/PayPalCheckout.component';

import * as storeActions from '../../Redux/Actions/Store.actions';

export class Store extends React.Component {
	state = {
		selectProductId: 0,
		price: 0
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
	
	handleProductSelect = (pProductId, pPrice) => {
    this.setState({ 
			selectProductId: pProductId,
			price: pPrice
		});
	};
	
	renderPayButton = () => {
		if(this.props.login) {
			return	<PayPalCheckout price={this.state.price} productId={this.state.selectProductId} purchase={this.props.purchase} />
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