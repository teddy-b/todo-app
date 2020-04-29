import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PaperSheet from "./PaperSheet";

Enzyme.configure({ adapter: new Adapter() });

describe("PaperSheet", () => {
  const props = {
    classes: {}
  };
  const children = <p>To Do items</p>;

  it("should render correctly", () => {
    const wrapper = shallow(<PaperSheet {...props} />);

    expect(wrapper).toBeTruthy();
  });

  it("should render children", () => {
    const wrapper = shallow(<PaperSheet {...props}>{children}</PaperSheet>);

    const list = wrapper.find("p");

    expect(list).toHaveLength(1);
    expect(list.text()).toContain("To Do items");
  });
});
