import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddToDo from "./AddToDo";
import { inputErrorMsg } from "../../constants/global";

Enzyme.configure({ adapter: new Adapter() });

describe("AddToDo", () => {
  const props = {
    addToDo: jest.fn(),
    changeText: jest.fn(),
    classes: {},
    error: "",
    text: ""
  };

  it("should render correctly", () => {
    const wrapper = shallow(<AddToDo {...props} />);

    expect(wrapper).toBeTruthy();
  });

  it("should render TextField", () => {
    const wrapper = mount(<AddToDo {...props} />);

    expect(wrapper.find("TextField")).toHaveLength(1);
  });

  it("should render Add Button", () => {
    const wrapper = mount(<AddToDo {...props} />);
    const button = wrapper.find("Button");

    expect(button).toHaveLength(1);
    expect(button.text()).toContain("Add");
  });

  it("should call addToDo on click", () => {
    const wrapper = mount(<AddToDo {...props} text="Task 1" />);
    const button = wrapper.find("Button");

    button.simulate("click");

    expect(props.addToDo).toHaveBeenCalledTimes(1);
  });

  it("should call changeText on change", () => {
    const wrapper = mount(<AddToDo {...props} />);
    const input = wrapper.find("input");

    input.simulate("change", { target: { value: "Task 1" } });

    expect(props.changeText).toHaveBeenCalledTimes(1);
  });

  it("should render error message", () => {
    const wrapper = mount(<AddToDo {...props} error={inputErrorMsg} />);
    const input = wrapper.find("TextField");

    expect(input.prop("error")).toEqual(true);
    expect(input.prop("helperText")).toEqual(inputErrorMsg);
  });

  it("should disable button when no text entered", () => {
    const wrapper = mount(<AddToDo {...props} />);
    const button = wrapper.find("Button");

    expect(button.prop("disabled")).toEqual(true);
  });

  it("should disable button when error occurs", () => {
    const wrapper = mount(<AddToDo {...props} error="Some error" />);
    const button = wrapper.find("Button");

    expect(button.prop("disabled")).toEqual(true);
  });

  it("should enable button when text is entered", () => {
    const wrapper = mount(<AddToDo {...props} text="Some task" />);
    const button = wrapper.find("Button");

    expect(button.prop("disabled")).toEqual(false);
  });
});
