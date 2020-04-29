import { changeText } from "./text.actions";
import { CHANGE_TEXT } from "../../constants/actionTypes";

describe("actions", () => {
  const text = "Task 1";
  it("should create an action to change text", () => {
    const expectedAction = {
      type: CHANGE_TEXT,
      payload: text
    };
    expect(changeText(text)).toEqual(expectedAction);
  });
});
