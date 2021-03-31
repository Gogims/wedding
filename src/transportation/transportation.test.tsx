import * as React from "react";
import { shallow } from "enzyme";
import Transportation from "./transportation";

describe("Transportation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Transportation />);
    expect(wrapper).toMatchSnapshot();
  });
});
