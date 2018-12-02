import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import time from '../../Include/Time';
import { MdThumbDown, MdThumbUp,MdFavorite } from "react-icons/md";
import axios from 'axios';
const REACT_APP_SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;
class AnswerComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			votes: props.answer.votes,
			statusId: props.answer.statusId
		};
	}


	vote = (voteValue) => {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('JWT');
		axios.patch(`${REACT_APP_SERVER_ADDRESS}answers/${this.props.answer.answerId}/vote?voteValue=${voteValue}`,
			).then(() => {
				this.setState({
					...this.state,
					votes: this.state.votes + voteValue
				})
			}).catch(err => {
				console.log(err);
			})
	}

	chooseBestAnswer = () => {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('JWT');
		axios.patch(`${REACT_APP_SERVER_ADDRESS}bounties/${this.props.bounty.bountyId}/answers/${this.props.answer.answerId}`,
			).then(() => {
				this.setState({
					...this.state,
					statusId: 3
				})
			}).catch(err => {
				console.log(err);
			})
	}



	renderBestAnswerButton(statusId){
		let bestButton;
		console.log(statusId);
		if (statusId === 3){
			bestButton = 
			<Button className ="answer-button-header " color="default" >
					<MdFavorite className='fontSize20 colorRed' />
			</Button>
		}else {
			bestButton = 
			<Button className ="answer-button-header " color="default" onClick={() => this.chooseBestAnswer()}>
					<MdFavorite className='fontSize20' />
			</Button>
		}
		return bestButton;
	}

	render() {
		return (
			<div id="answer-main">
				<Card id="card-main">
					{/* <CardMedia
							component="img"
							alt="Answer Picture alt"
							height="140"
							image={this.props.answer.picture}
							title="Answer Picture"
						/> */}
					<CardContent className='answer-card-header'>
						<div className='answer-card-flex-start'>
						Submitted by: {this.props.answer.username}
						</div>
						<div className= 'answer-header-card-flex-end'>
							{this.renderBestAnswerButton(this.state.statusId)}
						</div>
					</CardContent>
						<CardContent  className='answer-card-body'>
							{this.props.answer.description}
						</CardContent>
			

					<div className='answer-card-footer'>
						<div className='answer-card-flex-start'>
								<Button className ="answer-button" size="small" color="default" onClick={() => this.vote(1)}>
									<MdThumbUp className='fontSize20' />
								</Button>
								<Button className ="answer-button" size="small" color="default" onClick={() => this.vote(-1)}>
									<MdThumbDown className='fontSize20' />
								</Button>
						</div>
						<div className='margin-auto-rating answer-card-flex-start'>
								{`Rating: ${this.state.votes}`}
						</div>
						<div className='answer-card-flex-end margin-auto'>
							Submitted: {time(this.props.answer.submitted)}

						</div>
					</div>
				</Card>
			</div >
		);
	}
}

export default AnswerComponent;