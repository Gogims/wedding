import * as React from "react";
import { shallow } from "enzyme";
import Body from "./body";

describe("Body", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Body />);
    expect(wrapper).toMatchSnapshot();
  });
});
