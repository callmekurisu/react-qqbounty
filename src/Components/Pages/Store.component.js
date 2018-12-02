import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import Product from './Store/Product.component';

import * as storeActions from '../../Redux/Actions/Store.actions';


export class Store extends React.Component {
	state = {
    selectProductId: 0
	};

	handleProductSelect = (pProductId) => (event) =>{
		console.log(`Selected Id: ${pProductId}, Product Id: ${this.selectedId}`)
		this.setState({ selectProductId: pProductId });
	};
	
  render() {
		
		return (
			<>
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