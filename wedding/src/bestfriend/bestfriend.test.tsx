import * as React from "react";
import { shallow } from "enzyme";
import Bestfriend from "./bestfriend";

describe("Bestfriend", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Bestfriend />);
    expect(wrapper).toMatchSnapshot();
  });
});
