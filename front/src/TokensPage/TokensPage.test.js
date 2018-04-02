import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import TokensPage from "./index";

describe.only("<TokensPage />", () => {
  const mockGradientTokenStore = {
    mintToken: jest.fn()
  };

  it("renders and matches the snapshot", () => {
    const component = renderer.create(
      <TokensPage.wrappedComponent
        gradientTokenStore={mockGradientTokenStore}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
