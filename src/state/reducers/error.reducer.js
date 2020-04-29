import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  CHANGE_TEXT,
  ADD_ERROR
} from "../../constants/actionTypes";
import { initialState } from "../store/initialState";

export const error = (state = initialState.error, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return action.payload;
    case ADD_TODO:
    case REMOVE_TODO:
    case TOGGLE_TODO:
    case CHANGE_TEXT:
      return initialState.error;
    default:
      return state;
  }
};
