export const validateToDo = (text, toDos) =>
  toDos.some(toDo => toDo.name === text && !toDo.done);
