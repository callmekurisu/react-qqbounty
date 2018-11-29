import React from 'react';
import AnswerComponent from './Answer.component';

class AnswerListComponent extends React.Component {
    
    render() {
        console.log( this.props.answers);
        return (
          <div id ="answer-list-main">
            Answer List 
            
            {
                this.props.answers.map(a =>
                    <AnswerComponent answer={a} key={a.answerId}/>
                )
            }
          </div>
        );
      }
    }
    
    export default AnswerListComponent;