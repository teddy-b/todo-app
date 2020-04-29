import { ADD_TODO, CHANGE_TEXT } from "../../constants/actionTypes";
import { initialState } from "../store/initialState";

export const text = (state = initialState.text, action) => {
  switch (action.type) {
    case ADD_TODO:
      return initialState.text;
    case CHANGE_TEXT:
      return action.payload;
    default:
      return state;
  }
};
