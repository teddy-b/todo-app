import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from "../../constants/actionTypes";
import { initialState } from "../store/initialState";

export const toDos = (state = initialState.toDos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case REMOVE_TODO:
      return [...state.filter(toDo => toDo.id !== action.payload)];
    case TOGGLE_TODO:
      return state.map(toDo =>
        toDo.id === action.payload ? { ...toDo, done: !toDo.done } : toDo
      );
    default:
      return state;
  }
};
