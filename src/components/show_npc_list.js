import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 1000,
    overflowY: 'auto',
  }
}

class NpcList extends Component {
  renderList() {
    return (
      this.props.npcs.map((npc) =>
        <GridTile
          key={npc.thumbnail}
          title={npc.name}
          subtitle={npc.associations}
          >
          <img src={npc.thumbnail} />
        </GridTile>)
    );
  }
  render() {
    return (
      <div style={styles.root}>
        <GridList
          style={styles.gridList}
          cellHeight={300}
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

export default connect(mapStateToProps)(NpcList);
