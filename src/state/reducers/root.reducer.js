import { combineReducers } from "redux";
import { toDos } from "./toDos.reducer";
import { text } from "./text.reducer";
import { error } from "./error.reducer";

export const rootReducer = combineReducers({
  toDos,
  text,
  error
});
