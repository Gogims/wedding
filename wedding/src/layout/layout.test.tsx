import * as React from "react";
import { shallow } from "enzyme";
import Layout from "./layout";

describe("Layout", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
});
