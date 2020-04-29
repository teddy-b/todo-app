import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { paperColor } from "../../constants/global";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 4,
    backgroundColor: paperColor
  }
});

const PaperSheet = ({ children, classes }) => (
  <div>
    <Paper className={classes.root} elevation={1}>
      {children}
    </Paper>
  </div>
);

PaperSheet.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
