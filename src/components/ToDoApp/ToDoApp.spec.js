import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ToDoApp from "./ToDoApp";

Enzyme.configure({ adapter: new Adapter() });

describe("ToDoApp", () => {
  const props = {
    addToDo: jest.fn(),
    changeText: jest.fn(),
    error: "",
    removeToDo: jest.fn(),
    text: "",
    toDos: []
  };

  it("should render correctly", () => {
    const wrapper = shallow(<ToDoApp {...props} />);

    expect(wrapper).toBeTruthy();
  });

  it("should render Header", () => {
    const wrapper = mount(<ToDoApp {...props} />);

    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("should render PaperSheet", () => {
    const wrapper = mount(<ToDoApp {...props} />);

    expect(wrapper.find("PaperSheet")).toHaveLength(1);
  });

  it("should render AddToDo", () => {
    const wrapper = mount(<ToDoApp {...props} />);

    expect(wrapper.find("AddToDo")).toHaveLength(1);
  });

  it("should render ToDoList", () => {
    const wrapper = mount(<ToDoApp {...props} />);

    expect(wrapper.find("ToDoList")).toHaveLength(1);
  });
});
