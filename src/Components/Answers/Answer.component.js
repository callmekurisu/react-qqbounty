import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import time from '../../Include/Time';
import { AnswersClient } from '../../AxiosClients/qqBountyClient';
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import axios from 'axios';
const REACT_APP_SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;
class AnswerComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			votes: props.answer.votes
		};
	}


	vote = (voteValue) => {
		let jwtToken = localStorage.getItem('JWT');
		console.log(jwtToken);
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('JWT');
		axios.patch(`${REACT_APP_SERVER_ADDRESS}answers/${this.props.answer.answerId}?voteValue=${voteValue}`,
			).then(() => {
				this.setState({
					...this.state,
					votes: this.state.votes + voteValue
				})
			}).catch(err => {
				console.log(err);
			})
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
						Submitted by:{this.props.answer.username}
					</CardContent>
						<CardContent  className='answer-card-body'>
							Description:{this.props.answer.description}


						</CardContent>
			

					<div className='answer-card-footer'>
						<div className='answer-card-flex-start'>
							<CardActionArea>
								<Button className ="answer-button" size="small" color="black" onClick={() => this.vote(1)}>
									<MdThumbUp className='.material-icons.md-36' />
								</Button>
							</CardActionArea>
							<CardActionArea>
								<Button className ="answer-button" size="small" color="black" onClick={() => this.vote(-1)}>
									<MdThumbDown className='.material-icons.md-36' />
								</Button>
							</CardActionArea>
							<div className="margin-auto">
								Vote:{this.state.votes}
							</div>

						</div>
						<div className='answer-card-flex-end margin-auto'>
							Submitted:{time(this.props.answer.submitted)}<br />

						</div>
					</div>
				</Card>
			</div >
		);
	}
}

export default AnswerComponent;