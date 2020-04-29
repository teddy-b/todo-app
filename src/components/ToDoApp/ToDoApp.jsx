import React from "react";
import PropTypes from "prop-types";

import AddToDo from "../AddToDo/AddToDo";
import Header from "../Header/Header";
import PaperSheet from "../PaperSheet/PaperSheet";
import ToDoList from "../ToDoList/ToDoList";

const ToDoApp = ({
  addToDo,
  changeText,
  error,
  removeToDo,
  text,
  toDos,
  toggleToDo
}) => {
  return (
    <div className="to-do-app">
      <Header />
      <PaperSheet>
        <AddToDo
          addToDo={addToDo(text, toDos)}
          changeText={changeText}
          error={error}
          text={text}
        />
        <ToDoList
          toggleToDo={toggleToDo}
          removeToDo={removeToDo}
          toDos={toDos}
        />
      </PaperSheet>
    </div>
  );
};

ToDoApp.propTypes = {
  addToDo: PropTypes.func,
  changeText: PropTypes.func,
  error: PropTypes.string,
  removeToDo: PropTypes.func,
  text: PropTypes.string,
  toDos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      done: PropTypes.bool
    })
  ),
  toggleToDo: PropTypes.func
};

export default ToDoApp;
