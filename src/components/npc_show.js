import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Npc extends Component {
  render() {
    const { npc } = this.props;
    return (
      <div>
        <div>
          <img src={npc.thumbnail} alt={npc.name} width="200" />
          <h3>{npc.name}</h3>
          <h5><b>Associations</b>: {npc.associations}</h5>
        </div>
        <div>
          <p><b>Notes</b>:{npc.notes}</p>
        </div>
        <Link to="/npcs" className="btn btn-primary">Return to list</Link>
      </div>
    );
  }
}

function mapStateToProps({ npcs }, ownProps) {
  return { npc: npcs[ownProps.match.params.id]};
}

export default connect(mapStateToProps)(Npc);
