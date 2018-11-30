import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import time from '../../../../Include/Time';
import { connect } from 'react-redux';
import * as bountyActions from '../../../../Redux/Actions/Bounty.actions';

class BountyCard extends React.PureComponent {
 
  render() {
    return (
      <Card className="bounty-card" onClick={() => this.props.openModal(this.props.bounty)}>
        <CardHeader>
          
        </CardHeader>
        <Chip label="Basic Chip" className="bounty-card-chip" /> 
        {/* <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              QQ
            </Avatar>
          }
          action={
            <IconButton onClick="">
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.bounty.subject[0].subject}
          subheader={time(this.props.bounty.submitted)}
        />
        <CardMedia
          className={classes.media}
          image="https://orig00.deviantart.net/144d/f/2017/327/0/6/dukeprey22_by_wesker500-dbulan7.png"
          title="QQBounty"
        />
        <CardContent>
          <Typography component="p">
           {this.props.bounty.description}
          </Typography>
            <br/>
            <Typography paragraph>
              Amount: ${this.props.bounty.amount} SATS
            </Typography>
            <Typography paragraph>
              Expiration: {time(this.props.bounty.submitted+this.props.bounty.timer)}
            </Typography>
          </CardContent> */}
      </Card>
    );
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = {
  openModal: bountyActions.openBountyModal
}

export default connect(mapStateToProps, mapDispatchToProps)(BountyCard)