import React from "react";
import Title from "./Title";

import { shallow } from "enzyme";
describe("Header testing", () => {
  test("render the title of counter", () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find(".heading").text()).toContain("Counter App");
  });
});
