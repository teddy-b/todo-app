import { validateToDo } from "./validateToDo";
import { toDosMock } from "../mocks/toDos";

describe("validateToDo", () => {
  it("should validate to-do if task exists", () => {
    const text = "Task 1";

    expect(validateToDo(text, toDosMock)).toEqual(true);
  });

  it("should validate to-do if task exists but is done", () => {
    const text = "Task 3";

    expect(validateToDo(text, toDosMock)).toEqual(false);
  });

  it("should validate to-do if task does not exists", () => {
    const text = "Other task";

    expect(validateToDo(text, toDosMock)).toEqual(false);
  });
});
