import React, { Component } from 'react';

class NPC extends Component {
  constructor(props) {
    super(props);

    this.state = { npc: props.npc };
  }

  render() {
    const { npc } = this.state;
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
      </div>
    );
  }
}

export default NPC;
