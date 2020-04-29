import { CHANGE_TEXT } from "../../constants/actionTypes";

export const changeText = text => ({
  type: CHANGE_TEXT,
  payload: text
});
