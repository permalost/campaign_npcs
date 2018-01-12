import React, { Component } from 'react';
import { connect } from 'react-redux';

import Npc from './show_npc';

class NpcList extends Component {
  renderList() {
    return (
      this.props.npcs.map((npc) => <Npc npc={npc} />)
    );
  }
  render() {
    return (
      <div>
          {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps({ npcs }) {
  return { npcs };
}

export default connect(mapStateToProps)(NpcList);
