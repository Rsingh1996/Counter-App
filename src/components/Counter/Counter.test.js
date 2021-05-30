import React from "react";
import Counter from "./Counter";

import { shallow } from "enzyme";
describe("Counter testing", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Counter />)));

  test("render a button with symbol of `+`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("+");
  });
  test("render the initial vlaue of state", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the click event of `+` button and increment value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of `-` button and decrement value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of `0` button and reset value", () => {
    wrapper.find("#reset-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
