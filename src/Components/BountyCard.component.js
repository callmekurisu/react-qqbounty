import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
//this is a presentational component for cards in the preview window
class BountyCard extends React.PureComponent {
 
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} id="bountyTable--content">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              QQ
            </Avatar>
          }
          action={
            <IconButton onClick={this.props.bountyModal(this.props.info.bountyId)}>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.info.subject[0].subject}
          subheader={time(this.props.info.submitted)}
        />
        <CardMedia
          className={classes.media}
          image="https://orig00.deviantart.net/144d/f/2017/327/0/6/dukeprey22_by_wesker500-dbulan7.png"
          title="QQBounty"
        />
        <CardContent>
          <Typography component="p">
           {this.props.info.description}
          </Typography>
            <br/>
            <Typography paragraph>
              Amount: ${this.props.info.amount} SATS
            </Typography>
            <Typography paragraph>
              Expiration: {time(this.props.info.submitted+this.props.info.timer)}
            </Typography>

              {/* Unused but can add extra functionality if we have time */}
              
            {/* <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions> */}

          </CardContent>
      </Card>
    );
  }
}

BountyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BountyCard);