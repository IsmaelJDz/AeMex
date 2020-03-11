import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import routerMock from "../../__mocks__/routerMock";
import Header from "../../components/Header";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  test("Renderizar el header", () => {
    const header = shallow(
      <routerMock>
        <Header />
      </routerMock>
    );
    expect(header.length).toEqual(1);
  });
});

// describe("Header SnapShot", () => {
//   test("comprobar el SnapShot de Header", () => {
//     const header = create(
//       <routerMock>
//         <Header />
//       </routerMock>
//     );
//     expect(header.toJSON()).toMatchSnapshot();
//   });
// });
