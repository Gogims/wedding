import * as React from "react";
import { shallow } from "enzyme";
import Destination from "./destination";

describe("Destination", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Destination />);
    expect(wrapper).toMatchSnapshot();
  });
});
