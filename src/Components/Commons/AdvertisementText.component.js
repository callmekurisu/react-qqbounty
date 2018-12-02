import React from 'react';

export class AdvertisementText extends React.Component {

	render() {
		return (
			<>
        <div className="advertise-text-wrapper">
          <span className="advertise-span"></span>
          <p className="advertise-text">{this.props.text}</p>
          <span className="advertise-span"></span>
        </div>
      </>
		)
	}  
}

export default AdvertisementText