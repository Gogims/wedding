import * as React from "react";
import { shallow } from "enzyme";
import Cuernavaca from "./cuernavaca";

describe("Cuernavaca", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cuernavaca />);
    expect(wrapper).toMatchSnapshot();
  });
});
