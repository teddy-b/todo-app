import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from "../../constants/actionTypes";
import { initialState } from "../store/initialState";
import { toDos } from "./toDos.reducer";
import { toDosMock } from "../../mocks/toDos";

describe("toDos reducer", () => {
  const toDo = {
    id: 4,
    name: "Some task",
    done: false
  };
  let prevState = initialState.toDos;
  let action;
  let nextState;

  it("should return the initial state", () => {
    action = {};

    expect(toDos(undefined, action)).toEqual(prevState);
  });

  it("should handle ADD_TODO", () => {
    prevState = toDosMock;
    action = {
      type: ADD_TODO,
      payload: toDo
    };
    nextState = [toDo, ...toDosMock];

    expect(toDos(prevState, action)).toEqual(nextState);
  });

  it("should handle REMOVE_TODO", () => {
    prevState = [toDo, ...toDosMock];
    action = {
      type: REMOVE_TODO,
      payload: 4
    };
    nextState = toDosMock;

    expect(toDos(prevState, action)).toEqual(nextState);
  });

  it("should handle TOGGLE_TODO", () => {
    prevState = [toDo, ...toDosMock];
    action = {
      type: TOGGLE_TODO,
      payload: 4
    };
    nextState = [
      {
        id: 4,
        name: "Some task",
        done: true
      },
      ...toDosMock
    ];

    expect(toDos(prevState, action)).toEqual(nextState);
  });
});
