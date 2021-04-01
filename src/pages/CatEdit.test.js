// import App from "./App";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatEdit from "../pages/CatEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When Cat Edit renders", () => {
  let renderedCatEdit;
  beforeEach(() => {
    // arrange
    renderedCatEdit = shallow(<CatEdit />);
  });

  it("displays a Heading", () => {
    // act
    // user is looking for cat edit page
    const heading = renderedCatEdit.find("h1");

    // assert
    expect(heading.text()).toEqual("This is a CatEdit");
  });
});
