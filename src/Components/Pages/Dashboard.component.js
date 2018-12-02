import React from 'react';
import Slider from "react-slick";
import SearchBar from 'material-ui-search-bar'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';

import BountyCard from '../Bounty/BountyWindows/BountyCard.component';

export class Dashboard extends React.Component {

	renderBountyCarousel = (pBounties) => {
    if(pBounties.length !== 0) {
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
        <div id="dashboard-header">
          <h1 id="dashboard-title">
            Search for bounty subjects: 
          </h1>
          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
              margin: '0 auto',
              maxWidth: 800
            }}
          />
        </div>
        <div id="dashboard-content">
          <Slider
            {...settings} 
          >
            {carouselSlides}
          </Slider>
        </div>
      </>
		)
	} 
}

const mapStateToProps = (state) => {
  return {
    bounties: state.bounty.searchBounties.bounty_list.content
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)