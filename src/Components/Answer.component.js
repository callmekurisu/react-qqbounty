import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import time from '../Include/Time';
import { AnswersClient } from '../AxiosClients/qqBountyClient';

class AnswerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          votes: props.answer.votes
        };
      }


    vote = (voteValue) => {
        AnswersClient.patch(`/${this.props.answer.answerId}?voteValue=${voteValue}`)
          .then(() =>  {
            this.setState({
                ...this.state,
                votes: this.state.votes+voteValue
          })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div id="answer-main">
                <Card >{this.props.answer.answerId}
                    <CardActionArea>
                        {/* <CardMedia
                            component="img"
                            alt="Answer Picture alt"
                            height="140"
                            image={this.props.answer.picture}
                            title="Answer Picture"
                        /> */}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Answers
                            </Typography>
                            <Typography component="p">
                                Description:{this.props.answer.description}<br/>
                                Submtted:{time(this.props.answer.submitted)}<br/>
                                Votes:{this.state.votes}<br/>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => this.vote(1)}>
                            Vote Up
                        </Button>
                        <Button size="small" color="primary" onClick={() => this.vote(-1)}>
                            Vote Down
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default AnswerComponent;