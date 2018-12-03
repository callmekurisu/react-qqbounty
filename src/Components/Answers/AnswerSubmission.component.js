import React from 'react';
import TextField from "@material-ui/core/TextField";
import axios from 'axios';
const REACT_APP_SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;
//import * as clickerActions from '../../Redux/Actions/Clicker.actions';


class AnswerSubmissionComponent extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			description: '',
			bountyId: this.props.bounty.bountyId
		}
	}

	submit = (e) => {
		e.preventDefault();
		const answerObject = {
			"description": this.state.description,
			"bountyId": this.state.bountyId
		}
		console.log(this.state);
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('JWT');
		axios.post(	`${REACT_APP_SERVER_ADDRESS}/answers`,answerObject)
		.then(res => {
			this.props.updateAnswers(res.data.result.answers);
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