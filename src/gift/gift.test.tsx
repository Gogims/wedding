import * as React from "react";
import { shallow } from "enzyme";
import Gift from "./gift";

describe("Gift", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Gift />);
    expect(wrapper).toMatchSnapshot();
  });
});
