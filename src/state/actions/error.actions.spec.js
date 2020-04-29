import { addError } from "./error.actions";
import { ADD_ERROR } from "../../constants/actionTypes";
import { inputErrorMsg } from "../../constants/global";

describe("actions", () => {
  it("should create an action to add error", () => {
    const expectedAction = {
      type: ADD_ERROR,
      payload: inputErrorMsg
    };
    expect(addError()).toEqual(expectedAction);
  });
});
