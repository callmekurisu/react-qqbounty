import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import Product from './Store/Product.component';

import * as storeActions from '../../Redux/Actions/Store.actions';

export class Store extends React.Component {
	state = {
    selectProductId: 0
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
	
	handleProductSelect = (pProductId) => {
    this.setState({ selectProductId: pProductId });
  };
	
  render() {
    let renderProducts = this.renderProducts();

		return (
			<>
        <div id="store-wrapper">
					<h1 id="store-header">
						It ain't Falco
					</h1>
					<div id="store-shelf">
						{renderProducts}
					</div>
					<div id="store-btn-wrapper">
						<Button variant="contained" color="primary" id="purchase-btn"
							onClick={() => this.props.purchase(this.state.selectProductId)} >
							Buy Now
						</Button>
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