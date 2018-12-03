import React from 'react';

import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import PRODUCT_1 from '../../../Assets/images/gemBag.png';
import PRODUCT_2 from '../../../Assets/images/gemBundle.png';
import PRODUCT_3 from '../../../Assets/images/gemChest.png';
import GEM from '../../../Assets/images/gem.png';

const productImageList  = [PRODUCT_1,PRODUCT_2,PRODUCT_3]
const productImageStyle = ["product-image-1","product-image-2","product-image-3"]

export class Product extends React.Component {

  constructor(props) {
    super(props);
    this.radioRef = React.createRef();
  }

  render() {
    let sProductImage = productImageList[this.props.product.productId - 1];
    let sProductStyle = productImageStyle[this.props.product.productId - 1];
    
		return (
			<>
        <Paper className="product-container" 
          onClick={() => this.props.selectProduct(this.props.product.productId, this.props.product.productCost)}
          elevation={2} >
          <div className="product-content-wrapper">
            <div className="flex-column product-name-wrapper">
              <h1 className="product-name color-1">{this.props.product.productName}</h1>
            </div>
            <div className="product-image-wrapper">
              <img src={sProductImage} className={sProductStyle}/>
            </div>
            <div className="flex-column product-cost-wrapper">
              <h5 className="product-cost">${this.props.product.productCost}</h5>
            </div>
            <div className="flex-column">
              <div className="credit-wrapper flex-row">
                <img src={GEM} className="gem-image"/>
                <h5 className="product-credit">{this.props.product.productCredit}</h5>
              </div>
            </div>
          </div>
          <Radio
            ref={this.radioRef}
            className="product-radio-btn"
            checked={this.props.selectedId === this.props.product.productId}
            onClick={() => this.props.selectProduct(this.props.product.productId)}
            value={this.props.product.productId}
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