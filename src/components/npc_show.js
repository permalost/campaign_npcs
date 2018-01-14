import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteNpc } from "../actions";

class Npc extends Component {
  onDeleteClick() {
    const { name } = this.props.match.params;
    this.props.deleteNpc(name);
    this.props.history.push("/npcs");
  }

  render() {
    const { npc } = this.props;
    return (
      <div>
        <div>
          <img src={npc.thumbnail} alt={npc.name} width="200" />
          <h3>{npc.name}</h3>
          <h5>
            <b>Associations</b>: {npc.associations}
          </h5>
        </div>
        <div>
          <p>
            <b>Notes</b>:{npc.notes}
          </p>
        </div>
        <Link to="/npcs" className="btn btn-primary">
          Return to list
        </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete
        </button>
      </div>
    );
  }
}

function mapStateToProps({ npcs }, ownProps) {
  return { npc: npcs[ownProps.match.params.name] };
}

export default connect(mapStateToProps, { deleteNpc })(Npc);
