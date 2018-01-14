import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia
} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import { deleteNpc } from '../actions';

const styles = {
  card: {
    maxWidth: 450
  },
  media: {
    height: 600
  },
  img: {
    'object-fit': 'contain'
  }
};

class Npc extends Component {
  onDeleteClick() {
    const { name } = this.props.match.params;
    this.props.deleteNpc(name);
    this.props.history.push('/npcs');
  }

  onReturnClick() {
    this.props.history.push('/npcs');
  }

  render() {
    const { npc, classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader title={npc.name} subheader={npc.associations} />
          <CardMedia
            className={classes.media}
            image={npc.thumbnail}
            title={npc.name}
            src="img"
          />
          <CardContent>
            <Typography component="p">{npc.description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              dense
              color="primary"
              onClick={this.onReturnClick.bind(this)}
            >
              Return to List
            </Button>
            <Button
              dense
              color="accent"
              onClick={this.onDeleteClick.bind(this)}
            >
              Delete NPC
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ npcs }, ownProps) {
  return { npc: npcs[ownProps.match.params.name] };
}

Npc.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { deleteNpc })(withStyles(styles)(Npc));
