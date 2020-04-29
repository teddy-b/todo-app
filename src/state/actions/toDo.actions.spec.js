import { addToDo, removeToDo, toggleToDo } from "./toDo.actions";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from "../../constants/actionTypes";

describe("actions", () => {
  const text = "Task 1";
  const id = 1;

  it("should create an action to add to-do", () => {
    const expectedAction = {
      type: ADD_TODO,
      payload: {
        done: false,
        name: text,
        id: expect.any(Number)
      }
    };
    expect(addToDo(text)).toEqual(expectedAction);
  });

  it("should create an action to remove to-do", () => {
    const expectedAction = {
      type: REMOVE_TODO,
      payload: 1
    };
    expect(removeToDo(id)).toEqual(expectedAction);
  });

  it("should create an action to toggle to-do", () => {
    const expectedAction = {
      type: TOGGLE_TODO,
      payload: 1
    };
    expect(toggleToDo(id)).toEqual(expectedAction);
  });
});
