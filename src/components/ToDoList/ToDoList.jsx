import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";

const styles = theme => ({
  root: {
    width: "100%"
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

const ToDoList = ({ classes, removeToDo, toDos, toggleToDo }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Tasks
      </Typography>
      {!toDos.length && (
        <Typography variant="body1" gutterBottom>
          There are no tasks yet.
        </Typography>
      )}
      <List>
        {toDos.map(({ id, name, done }) => (
          <ListItem
            key={id}
            role={undefined}
            dense
            button
            onClick={toggleToDo(id)}
          >
            <ListItemIcon>
              <span>{id})</span>
            </ListItemIcon>
            <Checkbox
              checked={done}
              tabIndex={-1}
              disableRipple
              color="primary"
            />
            <ListItemText primary={name} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Clear" onClick={removeToDo(id)}>
                <ClearIcon color="secondary" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

ToDoList.propTypes = {
  classes: PropTypes.object.isRequired,
  removeToDo: PropTypes.func,
  toDos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      done: PropTypes.bool
    })
  ),
  toggleToDo: PropTypes.func
};

export default withStyles(styles)(ToDoList);
