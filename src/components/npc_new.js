import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { TextField } from 'redux-form-material-ui';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import { createNpc } from '../actions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  }
});

class NpcNew extends Component {
  onSubmit(values) {
    this.props.history.push('/npcs');
    return this.props.createNpc(values);
  }

  onCancelClick() {
    this.props.history.push('/npcs');
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="name"
          label="Name"
          placeholder="John Smith"
          required
          component={TextField}
        />
        <br />
        <Field
          name="associations"
          label="Associations"
          placeholder="Dockworker"
          component={TextField}
          required
          validate={value => (value == 'test' ? 'Required' : undefined)}
        />
        <br />
        <Field
          name="thumbnail"
          label="Image address"
          placeholder="http://paizo.com/image/content/PathfinderSociety/PZOPSS0910E-Finze.jpg"
          component={TextField}
          fullWidth
        />
        <br />
        <Field
          name="description"
          label="Description"
          placeholder="This is a great guy that did stuff and definitely also did things"
          component={TextField}
          fullWidth
          required
          multiline
          rows={3}
        />
        <br />
        <Button type="submit" color="primary">
          Save
        </Button>
        <Button color="accent" onClick={this.onCancelClick.bind(this)}>
          Cancel
        </Button>
      </form>
    );
  }
}

NpcNew = reduxForm({ form: 'NpcNew' })(NpcNew);

NpcNew = connect(null, { createNpc })(NpcNew);

NpcNew = withStyles(styles)(NpcNew);

export default NpcNew;
