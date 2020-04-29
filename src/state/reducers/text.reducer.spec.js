import { ADD_TODO, CHANGE_TEXT } from "../../constants/actionTypes";
import { initialState } from "../store/initialState";
import { text } from "./text.reducer";

describe("text reducer", () => {
  let prevState = initialState.text;
  let action;
  let nextState;

  it("should return the initial state", () => {
    action = {};

    expect(text(undefined, action)).toEqual(prevState);
  });

  it("should handle CHANGE_TEXT", () => {
    action = {
      type: CHANGE_TEXT,
      payload: "Some task"
    };
    nextState = "Some task";

    expect(text(prevState, action)).toEqual(nextState);
  });

  it("should handle ADD_TODO", () => {
    prevState = "Some task";
    action = {
      type: ADD_TODO,
      payload: "Some task"
    };
    nextState = "";

    expect(text(prevState, action)).toEqual(nextState);
  });
});
