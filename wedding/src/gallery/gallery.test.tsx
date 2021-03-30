import * as React from "react";
import { shallow } from "enzyme";
import Gallery from "./gallery";

describe("Gallery", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
