import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import InfoIcon from 'material-ui-icons/Info';

const cellWidth = 200;
const cellHeight = 1.4 * cellWidth;
const gridListWidth = 800;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: gridListWidth,
    height: 1000
  },
  img: {
    height: cellHeight,
    width: cellWidth,
    'object-fit': 'contain'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.7)'
  },
  btn: {
    width: 100,
    height: 20
  }
});

class NpcList extends Component {
  onClick(event) {
    const name = event.currentTarget.getAttribute('name');
    this.props.history.push(`/npcs/${name}`);
  }

  onAddClick() {
    this.props.history.push('/npcs/new');
  }

  renderList() {
    const { classes, npcs } = this.props;

    return _.map(npcs, npc => (
      <GridListTile key={npc.thumbnail}>
        <img src={npc.thumbnail} alt={npc.name} className={classes.img} />
        <GridListTileBar
          title={npc.name}
          subtitle={npc.associations}
          actionIcon={
            <IconButton className={classes.icon}>
              <InfoIcon onClick={this.onClick.bind(this)} name={npc.name} />
            </IconButton>
          }
        />
      </GridListTile>
    ));
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Button color="primary" raised onClick={this.onAddClick.bind(this)}>
          Add New NPC
        </Button>
		<GridList
			  className={classes.gridList}
			  cellHeight={cellHeight}
			  cols={gridListWidth / cellWidth}
		>
			  {this.renderList()}
		</GridList>
      </div>
    );
  }
}

function mapStateToProps({ npcs }) {
  return { npcs };
}

NpcList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(NpcList));
