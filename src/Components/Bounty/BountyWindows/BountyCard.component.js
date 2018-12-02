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
import time from '../../../Include/Time';
import { connect } from 'react-redux';
import * as bountyActions from '../../../Redux/Actions/Bounty.actions';

class BountyCard extends React.PureComponent {
 
  renderSubjectChips = () => {
    if(this.props.bounty.subject !== null) {
      return this.props.bounty.subject.map(subject => {
                return <Chip  key={subject.subject}
                              label={subject.subject} 
                              className="bounty-card-chip"
                              color="primary"
                              />
              })
    } else return null;
  }

  render() {
    let tChips = this.renderSubjectChips();
  
    return (
      <Card className="bounty-card" onClick={() => this.props.openModal(this.props.bounty)}>
        <CardContent className="bounty-card-content">
          <div className="bounty-card-main">
            <h6 className="bounty-card-title">
              {this.props.bounty.title}
            </h6>
            {tChips}
            <p className="bounty-card-description">
              {this.props.bounty.description}
            </p>
          </div>
          <div className="bounty-card-footer">
            {this.props.bounty.amount}
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = {
  openModal: bountyActions.openBountyModal
}

export default connect(mapStateToProps, mapDispatchToProps)(BountyCard)