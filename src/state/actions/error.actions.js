import { ADD_ERROR } from "../../constants/actionTypes";
import { inputErrorMsg } from "../../constants/global";

export const addError = () => ({
  type: ADD_ERROR,
  payload: inputErrorMsg
});
