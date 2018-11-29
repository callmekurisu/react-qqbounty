import React from 'react';

import AnswerListComponent from './AnswerList.component';
import AnswerSubmissionComponent from './AnswerSubmission.component';
import BountiesClient from '../AxiosClients/qqBountyClient';

class BountyAnswersComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submittingAnswer: true,
            bountyId: 1,
            answers: []
        };
        this.handleSubmitAnswerClick = this.handleSubmitAnswerClick.bind(this);
    }

    componentDidMount(){
        BountiesClient.get(`${this.state.bountyId}/answers`)
        .then(data => {
          this.setState({
            ...this.state,
            answers: data.data.result.answer_list
          })
        }).catch(err => {
          console.log(err);
        });
        
    }

    handleSubmitAnswerClick() {
        this.setState(state => ({
            ...state,
            submittingAnswer: !state.submittingAnswer
        }));
    }

    updateAnswers= (newAnswer) => {
            //Spread Operator doesn't work here :(
            let newArray = this.state.answers.slice();
            newArray.push(newAnswer);    
            this.setState({
              ...this.state,
              answers: newArray
            })
            console.log(this.state);
      }

    render() {

        let view;
        if (this.state.submittingAnswer) {
            view = <AnswerListComponent answers={this.state.answers} />
        } else {
            view = <AnswerSubmissionComponent updateAnswers={this.updateAnswers.bind(this)} />;
        }


        return (
            <div id="bounty-answers-main">
                <h1>Bounty Answers</h1>
                {view}
                <button onClick={this.handleSubmitAnswerClick}> {this.state.submittingAnswer ? 'Write an Answer' : 'Back'}</button >
            </div>
        );
    }
}

export default BountyAnswersComponent;