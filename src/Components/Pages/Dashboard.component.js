import React from 'react';
import Slider from "react-slick";
import SearchBar from 'material-ui-search-bar'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';

import BountyCard from '../Bounty/BountyWindows/BountyCard.component';
import SelectSubjects from './SubmitBounty/SelectSubjects';

import * as bountyActions from '../../Redux/Actions/Bounty.actions';

export class Dashboard extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			subjects: []
		}
  }

	renderBountyCarousel = (pBounties) => {
    console.log(pBounties)
    if(pBounties.length !== 0) {
      return  pBounties.map(bounty => {
                return <BountyCard key={bounty.bountyId} bounty={bounty} />
              })
    } else {
      return null;
    }
  }
  
  handleSubjectChange = (pSubjects) => {
    let subjectArray = pSubjects.map(subject => subject.value);
		this.setState({
      subjects: subjectArray,
    }, () => this.props.getSearchBounties(this.state.subjects));
  }
  
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(this.state.subjects);
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
            Search by subjects
          </h1>
        </div>
        <div id="dashboard-select-subjects-wrapper">
          <SelectSubjects 
            changeSubjects={this.handleSubjectChange} 
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
  getSearchBounties: bountyActions.getSearchBounties
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)