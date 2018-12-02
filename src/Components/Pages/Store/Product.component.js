import React from 'react';

import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

export class Product extends React.Component {

  constructor(props) {
    super(props);
    this.radioRef = React.createRef();
  }

  render() {
    console.log("1");
    console.log(this.props)
		return (
			<>
        <Paper className="product-container" 
          elevation={2} >
          <div className="product-content-wrapper">
            <h1 className="product-name">{this.props.product.productName}</h1>
            <img src="" className="product-image"/>
            <h5 className="product-cost">{this.props.product.productCost}</h5>
            <h5 className="product-credit">{this.props.product.productCredit}</h5>
          </div>
          <Radio
            ref={this.radioRef}
            className="product-radio-btn"
            checked={this.props.selectedId === this.props.product.id}
            onChange={() => this.props.selectProduct(this.props.product.id)}
            onClick={() => this.props.selectProduct(this.props.product.id)}
            value={this.props.product.id}
            color="orange"
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