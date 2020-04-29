import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from "../../constants/actionTypes";
import { uniqueId } from "../../utils/uniqueId";

export const addToDo = text => ({
  type: ADD_TODO,
  payload: {
    id: uniqueId(),
    name: text,
    done: false
  }
});

export const removeToDo = id => ({
  type: REMOVE_TODO,
  payload: id
});

export const toggleToDo = id => ({
  type: TOGGLE_TODO,
  payload: id
});
