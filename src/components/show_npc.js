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
          <img src={npc.thumbnail} alt={npc.name} width="100" />
        </div>
        <div>
          <h3>{npc.name}</h3>
          <h5>Associations: {npc.associations}</h5>
          <p>Notes:{npc.notes}</p>
        </div>
      </div>
    );
  }
}

export default NPC;
