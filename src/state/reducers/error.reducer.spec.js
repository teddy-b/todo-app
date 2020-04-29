import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  CHANGE_TEXT,
  ADD_ERROR
} from "../../constants/actionTypes";
import { initialState } from "../store/initialState";
import { error } from "./error.reducer";

describe("error reducer", () => {
  let prevState = initialState.error;
  let action;
  let nextState;

  it("should return the initial state", () => {
    action = {};

    expect(error(undefined, action)).toEqual(prevState);
  });

  it("should handle ADD_ERROR", () => {
    action = {
      type: ADD_ERROR,
      payload: "Some error"
    };
    nextState = "Some error";

    expect(error(prevState, action)).toEqual(nextState);
  });

  it("should handle ADD_TODO", () => {
    prevState = "Some error";
    action = {
      type: ADD_TODO,
      payload: "Some task"
    };
    nextState = "";

    expect(error(prevState, action)).toEqual(nextState);
  });

  it("should handle REMOVE_TODO", () => {
    prevState = "Some error";
    action = {
      type: REMOVE_TODO,
      payload: "Some task"
    };
    nextState = "";

    expect(error(prevState, action)).toEqual(nextState);
  });

  it("should handle TOGGLE_TODO", () => {
    prevState = "Some error";
    action = {
      type: TOGGLE_TODO,
      payload: "Some task"
    };
    nextState = "";

    expect(error(prevState, action)).toEqual(nextState);
  });

  it("should handle CHANGE_TEXT", () => {
    prevState = "Some error";
    action = {
      type: CHANGE_TEXT,
      payload: "Some task"
    };
    nextState = "";

    expect(error(prevState, action)).toEqual(nextState);
  });
});
