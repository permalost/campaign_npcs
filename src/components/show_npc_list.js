import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';

const cellHeight = 180;
const cellWidth = 125;
const gridListWidth = 750;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: gridListWidth,
    height: 500,
  },
  img: {
    height: cellHeight,
    width: cellWidth,
    'object-fit': 'contain',
  }
});

class NpcList extends Component {

  renderList() {
    const { classes } = this.props;

    return (
      this.props.npcs.map((npc) =>
        <GridListTile key={npc.thumbnail}>
          <img src={npc.thumbnail} alt={npc.name} className={classes.img} />
          <GridListTileBar title={npc.name} subtitle={npc.associations} />
        </GridListTile>)
    );
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cellHeight={cellHeight}
          cols={gridListWidth/cellWidth}
        >
          {this.renderList()}
        </GridList>
      </div>
    )
  }
}

function mapStateToProps({ npcs }) {
  return { npcs };
}

NpcList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(NpcList));
