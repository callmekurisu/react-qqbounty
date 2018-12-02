import React from 'react';
import TextField from "@material-ui/core/TextField";
import { AnswersClient } from '../../AxiosClients/qqBountyClient';
import axios from 'axios';
const REACT_APP_SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;
let jwtToken = localStorage.getItem('JWT');
//import * as clickerActions from '../../Redux/Actions/Clicker.actions';


class AnswerSubmissionComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: '',
			bountyId: 1
		}
	}

	submit = (e) => {
		e.preventDefault();
		const answerObject = {
			"description": this.state.description,
			"bountyId": this.state.bountyId
		}
		
		axios.post(	`${REACT_APP_SERVER_ADDRESS}/answers`,answerObject,{headers: {
			'Authorization': `Bearer ${jwtToken}`
		  }})
		.then(res => {
			this.props.updateAnswers(res.data.result.answer);
		})
		.catch(err => {
			console.log(err);
		})
	}

	descriptionChange = (e) => {
		this.setState({
			...this.state,
			description: e.target.value
		})
	}


	
	render() {
		return (
			
			<div id="answer-submission-main">
				<form onSubmit={this.submit}>
					<TextField
						label="Answer Submission"
						variant="outlined"
						id="custom-css-outlined-input filled-multiline-flexible"
						multiline
						rowsMax="14"
						margin="normal"
						fullWidth
						value={this.state.description}
						onChange={this.descriptionChange}
						color="black"
					/>
					<div>
					<button className="btn btn-dark button-center"
						type="submit">
						Submit Answer
					</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AnswerSubmissionComponent;