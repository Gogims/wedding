import * as React from "react";
import { shallow } from "enzyme";
import Rsvp from "./rsvp";

describe("Rsvp", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Rsvp />);
    expect(wrapper).toMatchSnapshot();
  });
});
