import React from 'react';
import AnswerComponent from './Answer.component';

class AnswerListComponent extends React.Component {
    

view = () =>{
  if (this.props.answers.length !== 0){
    console.log(this.props.answers);
      return true;
  }else{
    return false;
  }
}

  render() {
    return (
      <div id ="answer-list-main">
          {this.view() ? (this.props.answers.map(a =><AnswerComponent answer={a} key={a.answerId}/>) ) 
                      : (<h1>No answers found. Be the first to submit one!</h1>
          )}
  
  
      </div>
      );
    }
  }
  
export default AnswerListComponent;