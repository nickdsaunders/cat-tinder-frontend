// import App from "./App";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatEdit from "./pages/CatEdit";

Enzyme.configure({ adapter: new Adapter() });

fdescribe("When Cat Edit renders", () => {
  let renderedCatEdit;
  beforeEach(() => {
    // arrange
    renderedCatEdit = shallow(<CatEdit />);
  });

  it("displays Cat Edit page", () => {
    // act
    // user is looking for cat edit page
    const renderedEdit = renderedCatEdit.find("CatEdit");

    // assert
    expect(renderedEdit.length).toEqual(1);
  });
});
