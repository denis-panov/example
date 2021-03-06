import * as React from "react";
import { create } from "react-test-renderer";
import { Buttons } from "..";
import { MockProviderAndRouter } from "../../../../../utils";

it("renders correctly", () => {
  const dom = create(<MockProviderAndRouter Component={Buttons} />).toJSON();
  expect(dom).toMatchSnapshot();
});
