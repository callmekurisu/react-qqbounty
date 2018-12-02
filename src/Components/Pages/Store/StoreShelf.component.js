import React from 'react';
import { connect } from 'react-redux';

import Product from './Product.component'

import * as storeActions from '../../../Redux/Actions/Store.actions';

export class StoreShelf extends React.Component {
  
  renderProductShelf = () =>  {
    if(this.props.products.length !== 0) {
      return this.props.products.map( product => {
        return <Product key={product.productId} product={product} />
      })
    } else return null;
  }

  render() {
    let renderProductShelf = this.renderProductShelf();
		return (
			<>
        <div id="store-wrapper">
					<div id="store-header">
					
					</div>
					{renderProductShelf}
				</div>
      </>
		)
	}
}

export default StoreShelf