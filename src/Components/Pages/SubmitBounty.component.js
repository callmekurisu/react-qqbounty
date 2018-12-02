import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import SelectSubjects from './SubmitBounty/SelectSubjects';

import * as bountyActions from '../../Redux/Actions/Bounty.actions';
import * as snackbarActions from '../../Redux/Actions/Snackbar.actions';

const times = [
	{
    value: 1,
    label: '1 Hour',
	},
	{
    value: 2,
    label: '2 Hours',
	},
	{
    value: 3,
    label: '3 Hours',
	},
	{
    value: 4,
    label: '4 Hours',
	}
];

export class SubmitBounty extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: 1,
			title: "",
			description: "",
			picture: "",
			subjects: [],
			timer: 1
		}
	}

	handleSubjectChange = (pSubjects) => {
    let subjectArray = pSubjects.map(subject => subject.value);
	this.setState({
      subjects: subjectArray,
    });
	}

	handleChange = name => event => {
		if(name === 'amount') {
			if(event.target.value < 1)
				event.target.value = 1;
		}
		else if(name === 'timer') {
			if(event.target.value < 1)
				event.target.value = 1;
		}
    this.setState({
      [name]: event.target.value,
    });
	};
	
	handleSubmit = () => {
		if( this.state.title === "" || 
				this.state.description === "") {
			this.props.snackbarAdd("Please completely fill out the bounty");
		} else if(this.state.amount > this.props.balance) {
			this.props.snackbarAdd("Unavailable balance");
		} else {
			this.props.submitBounty(this.state);
		}
	}

  render() {
		return (
			<>
        <div id="submit-bounty-wrapper">
					<h1 id="submit-bounty-header">Submit a Bounty</h1>
					<div id="submit-bounty-content">
						<div className="flex-row">
							<div id="bounty-select-title">
								<TextField
									fullWidth={true}
									type="text"
									margin="normal"
									helperText="Enter the title"
									onChange={this.handleChange('title')}
								/>
							</div>
							<div id="bounty-select-timer">
								<TextField
									select
									value={this.state.timer}
									fullWidth={false}
									onChange={this.handleChange('timer')}
									helperText="Select the duration for the bounty"
									margin="normal"
								>	
									{times.map(option => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</div>
						</div>
						<div id="bounty-select-amount">
							<TextField
								type="amount"
								fullWidth={true}
								label="Bounty reward"
								value={this.state.amount}
								onChange={this.handleChange('amount')}
								margin="normal"
							/>
						</div>
						<div id="bounty-select-description">
							<TextField
								fullWidth={true}
								label="Description"
								multiline
								rowsMax="4"
								rows="4"
								value={this.state.description}
								onChange={this.handleChange('description')}
								margin="normal"
								variant="outlined"
							/>
						</div>
						<div id="bounty-select-subjects">
							<SelectSubjects changeSubjects={this.handleSubjectChange} />
						</div>
						<Button id="submit-bounty-btn" onClick={this.handleSubmit} variant="contained" color="primary">
							Submit
						</Button>
					</div>
				</div>
      </>
		)
	} 
}

const mapStateToProps = (state) => {
  return {
    balance: state.user.balance
  }
}

const mapDispatchToProps = {
	submitBounty: bountyActions.submitBounty,
	snackbarAdd: 	snackbarActions.add
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitBounty)