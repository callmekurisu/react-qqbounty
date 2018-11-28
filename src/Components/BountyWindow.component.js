import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BountiesClient } from '../AxiosClients/qqBountyClient';
import time from '../Include/Time';

const styles = theme => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '75.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class BountyCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      expanded: false,
      bounty: []
    }
  }
  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount() {
    BountiesClient.get()
      .then((response) => {
        this.setState({ 
          ...this.state,
          bounty: response.data.content
        })
  
      })
      //you did something bad like trying to navigate here without logging in
      .catch(err => {
        //launch error modal
      })
  }
  render() {
    const { classes } = this.props;
    return (
      <>
      {/* Why are all these cards connected??? */}
      {/* May need to curry this here! */}
      <div id="window">
      <section className="bountyTable">
     { this.state.bounty.map((info, index) => (
      <Card key={index} className={classes.card} id="bountyTable--content">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              QQ
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={info.subject[0].subject}
          subheader={time(info.submitted)}
        />
        <CardMedia
          className={classes.media}
          image="https://orig00.deviantart.net/144d/f/2017/327/0/6/dukeprey22_by_wesker500-dbulan7.png"
          title="QQBounty"
        />
        <CardContent>
          <Typography component="p">
           {info.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Amount: ${info.amount} SATS</Typography>
            <Typography paragraph>
              Tags: other subjects if any?
            </Typography>
            <Typography paragraph>
              Submitted by: username here???
            </Typography>
            <Typography paragraph>
              Expiration: {time(info.submitted+info.timer)}
            </Typography>
          </CardContent>

        </Collapse>
      </Card>
     
     ))}
      </section>
      </div>
     </>
    );
  }
}

BountyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BountyCard);