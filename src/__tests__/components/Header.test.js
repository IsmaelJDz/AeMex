import React from "react";
import { mount, shallow } from "enzyme";
import { create } from "react-test-renderer";
import Header from "../../components/Header";

describe("<Header />", () => {
  test("Renderizar el header", () => {
    const header = shallow(<Header />);
    expect(header.length).toEqual(1);
  });

  test("Render del titulo", () => {
    const header = mount(<Header />);
    expect(header.find(".Header-title").text()).toEqual("Platzi Store");
  });
});

describe("Header SnapShot", () => {
  test("comprobar el SnapShot de Header", () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});
