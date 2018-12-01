import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';

import BountyCard from '../Bounty/BountyWindows/BountyCard.component';

export class Dashboard extends React.Component {

	renderBountyCarousel = (pBounties) => {
    if(pBounties !== null) {
      return  pBounties.map(bounty => {
                return <BountyCard key={bounty.bountyId} bounty={bounty} />
              })
    } else {
      return null;
    }
	}
	
  render() {
    let carouselSlides = this.renderBountyCarousel(this.props.bounties);
		let tRows = Math.ceil(this.props.bounties.length / 5);
		console.log(tRows);
		let settings = {
			className: "center",
			centerMode: true,
			infinite: false,
			centerPadding: "60px",
			speed: 500,
			rows: tRows,
			slidesPerRow: 5
		};

		return (
			<>
        <Slider
          {...settings} 
        >
          {carouselSlides}
        </Slider>
      </>
		)
	} 
}

const mapStateToProps = (state) => {
  return {
    bounties: state.bounty.bounties
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)