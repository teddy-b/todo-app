import { connect } from "react-redux";

import { addToDo, removeToDo, toggleToDo } from "../state/actions/toDo.actions";
import { changeText } from "../state/actions/text.actions";
import { addError } from "../state/actions/error.actions";
import ToDoApp from "../components/ToDoApp/ToDoApp";
import { validateToDo } from "../utils/validateToDo";

const mapStateToProps = ({ toDos, text, error }) => ({ toDos, text, error });

const mapDispatchToProps = dispatch => ({
  addToDo: (text, toDos) => () =>
    dispatch(validateToDo(text, toDos) ? addError() : addToDo(text)),
  removeToDo: id => () => dispatch(removeToDo(id)),
  toggleToDo: id => () => dispatch(toggleToDo(id)),
  changeText: text => dispatch(changeText(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);
