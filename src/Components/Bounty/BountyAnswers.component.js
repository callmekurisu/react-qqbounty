import React from 'react';

import AnswerListComponent from '../Answers/AnswerList.component';
import AnswerSubmissionComponent from '../Answers/AnswerSubmission.component';
import {BountiesClient} from '../../AxiosClients/qqBountyClient';
import {Button } from 'reactstrap';
import axios from 'axios';
const REACT_APP_SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;
let jwtToken = localStorage.getItem('JWT');
class BountyAnswersComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				submittingAnswer: true,
				answers: []
		};
		this.handleSubmitAnswerClick = this.handleSubmitAnswerClick.bind(this);
	}

	componentDidMount(){
		axios.get(`${REACT_APP_SERVER_ADDRESS}/bounties/${this.props.bounty.bountyId}/answers`,
		{
			headers: {
			'Authorization': `Bearer ${jwtToken}`
		  }
		})
		.then(data => {
			console.log(data);
			this.setState({
				...this.state,
				answers: data.data.result.answers.content
			})
			console.log(this.state.answers);
		}).catch(err => {
			console.log(err);
		});
	}

	handleSubmitAnswerClick() {
		this.setState({
			submittingAnswer: !this.state.submittingAnswer
		});
	}

	updateAnswers= (newAnswer) => {
		//Spread Operator doesn't work here :(
		let newArray = this.state.answers.slice();
		newArray.push(newAnswer);    
		this.setState({
			...this.state,
			answers: newArray,
			submittingAnswer: true
		})
		console.log(this.state);
	}

	render() {
		let view;
		if (this.state.submittingAnswer) {
			view = <AnswerListComponent bounty={this.props.bounty} answers={this.state.answers} />
		} else {
			view = <AnswerSubmissionComponent bounty={this.props.bounty} updateAnswers={this.updateAnswers.bind(this)} />;
		}
		
		return (
			<div id="bounty-answers-main">
				{view}
				<div className='button-flex-end'>
				<Button  className='answer-submit-button' color='dark' onClick={this.handleSubmitAnswerClick}> {this.state.submittingAnswer ? 'Write an Answer' : 'Back'}</Button >
				</div>
			</div>
		);
	}
}

export default BountyAnswersComponent;