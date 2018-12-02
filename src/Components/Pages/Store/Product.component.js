import React from 'react';

import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import PRODUCT_1 from '../../../Assets/images/gemBag.png';
import PRODUCT_2 from '../../../Assets/images/gemBundle.png';
import PRODUCT_3 from '../../../Assets/images/gemChest.png';

const productImageList = [PRODUCT_1,PRODUCT_2,PRODUCT_3]

export class Product extends React.Component {

  constructor(props) {
    super(props);
    this.radioRef = React.createRef();
  }

  render() {
    let sProductImage = productImageList[this.props.product.id -1];
		return (
			<>
        <Paper className="product-container" 
          onClick={() => this.props.selectProduct(this.props.product.id)}
          elevation={2} >
          <div className="product-content-wrapper">
            <h1 className="product-name">{this.props.product.productName}</h1>
            <img src={sProductImage} className="product-image"/>
            <h5 className="product-cost">Cost: {this.props.product.productCost} SATS</h5>
            <h5 className="product-credit">Credits: {this.props.product.productCredit} QQ</h5>
          </div>
          <Radio
            ref={this.radioRef}
            className="product-radio-btn"
            checked={this.props.selectedId === this.props.product.id}
            onClick={() => this.props.selectProduct(this.props.product.id)}
            value={this.props.product.id}
            color="secondary"
            name="radio-button-demo"
            aria-label="E"
            icon={<RadioButtonUncheckedIcon fontSize="small" />}
            checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
          />
        </Paper>
      </>
		)
	}
}

export default Product