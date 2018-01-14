import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { TextField } from "redux-form-material-ui";
import { withStyles } from "material-ui/styles";

import { createNpc } from "../actions";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  }
});

class NpcNew extends Component {
  onSubmit(values) {
    this.props.history.push("/npcs");
    return this.props.createNpc(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="name"
          label="Name"
          placeholder="Dummy McMeathead"
          component={TextField}
        />
        <br />
        <Field
          name="associations"
          label="Associations"
          placeholder="Korvosan Guard"
          component={TextField}
          validate={value => (value == null ? "Required" : undefined)}
        />
        <br />
        <Field
          name="thumbnail"
          label="Picture address"
          placeholder="http://paizo.com/image/content/PathfinderSociety/PZOPSS0910E-Finze.jpg"
          component={TextField}
        />
        <br />
        <Field
          name="notes"
          label="Notes"
          component={TextField}
          multiLine={true}
          rows={5}
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <Link to="/npcs" className="btn btn-danger pull-xs-right">
          Cancel
        </Link>
      </form>
    );
  }
}

NpcNew = reduxForm({ form: "NpcNew" })(NpcNew);

NpcNew = connect(null, { createNpc })(NpcNew);

NpcNew = withStyles(styles)(NpcNew);

export default NpcNew;
