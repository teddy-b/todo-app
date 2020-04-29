import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  const props = {
    classes: {}
  };

  it("should render correctly", () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper).toBeTruthy();
  });

  it("should render AppBar with title", () => {
    const wrapper = mount(<Header {...props} />);
    const appBar = wrapper.find("AppBar");

    expect(appBar).toHaveLength(1);
    expect(appBar.text()).toContain("To Do List");
  });
});
