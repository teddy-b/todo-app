import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

const AddToDo = ({ addToDo, changeText, classes, error, text }) => {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="addToDo"
        label="Add task name"
        className={classes.textField}
        value={text}
        onChange={e => changeText(e.target.value)}
        error={Boolean(error)}
        helperText={error}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={addToDo}
        disabled={!text || Boolean(error)}
      >
        <Icon className={classes.leftIcon}>add_circle</Icon>
        Add
      </Button>
    </form>
  );
};

AddToDo.propTypes = {
  addToDo: PropTypes.func,
  changeText: PropTypes.func,
  classes: PropTypes.object.isRequired,
  error: PropTypes.string,
  text: PropTypes.string
};

export default withStyles(styles)(AddToDo);
