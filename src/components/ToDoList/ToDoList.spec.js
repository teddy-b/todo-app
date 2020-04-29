import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ToDoList from "./ToDoList";
import { toDosMock } from "../../mocks/toDos";

Enzyme.configure({ adapter: new Adapter() });

describe("ToDoList", () => {
  const props = {
    classes: {},
    removeToDo: jest.fn(),
    toDos: [],
    toggleToDo: jest.fn()
  };
  const length = toDosMock.length;

  it("should render correctly", () => {
    const wrapper = shallow(<ToDoList {...props} />);

    expect(wrapper).toBeTruthy();
  });

  it("should render Tasks heading", () => {
    const wrapper = mount(<ToDoList {...props} />);
    const heading = wrapper.find("h6");

    expect(heading).toHaveLength(1);
    expect(heading.text()).toContain("Tasks");
  });

  it("should render text if no items", () => {
    const wrapper = mount(<ToDoList {...props} />);
    const text = wrapper.find("p");

    expect(text).toHaveLength(1);
    expect(text.text()).toContain("There are no tasks yet.");
  });

  it("should render List", () => {
    const wrapper = mount(<ToDoList {...props} toDos={toDosMock} />);

    expect(wrapper.find("List")).toHaveLength(1);
  });

  it("should render ListItem", () => {
    const wrapper = mount(<ToDoList {...props} toDos={toDosMock} />);

    expect(wrapper.find("ListItem")).toHaveLength(length);
  });

  it("should render ListItemIcon", () => {
    const wrapper = mount(<ToDoList {...props} toDos={toDosMock} />);
    const icons = wrapper.find("ListItemIcon");

    expect(icons).toHaveLength(length);
    icons.forEach(icon => expect(icon.text()).toContain(")"));
  });

  it("should render Checkbox", () => {
    const wrapper = mount(<ToDoList {...props} toDos={toDosMock} />);

    expect(wrapper.find("Checkbox")).toHaveLength(length);
  });

  it("should render ListItemText", () => {
    const wrapper = mount(<ToDoList {...props} toDos={toDosMock} />);
    const tasks = wrapper.find("ListItemText");

    expect(tasks).toHaveLength(length);
    expect(tasks.at(0).text()).toContain("Task 1");
    expect(tasks.at(1).text()).toContain("Task 2");
    expect(tasks.at(2).text()).toContain("Task 3");
  });

  it("should render ClearIcon", () => {
    const wrapper = mount(<ToDoList {...props} toDos={toDosMock} />);

    expect(wrapper.find("ClearIcon")).toHaveLength(length);
  });

  it("should call toggleToDo on click", () => {
    const toggleToDo = jest.fn();
    const wrapper = mount(
      <ToDoList {...props} toDos={toDosMock} toggleToDo={toggleToDo} />
    );
    const button = wrapper.find("Checkbox").at(0);

    button.simulate("click");

    expect(toggleToDo).toHaveBeenCalled();
  });

  it("should call removeToDo on click", () => {
    const removeToDo = jest.fn();
    const wrapper = mount(
      <ToDoList {...props} toDos={toDosMock} removeToDo={removeToDo} />
    );
    const button = wrapper.find("ClearIcon").at(0);

    button.simulate("click");

    expect(removeToDo).toHaveBeenCalled();
  });
});
