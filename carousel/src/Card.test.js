import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

import TEST_IMAGES from "./_testCommon.js";

it("works", function () {
  const img = TEST_IMAGES[0];
  render(
    <Card
      caption={img.caption}
      src={img.src}
      curNum={0}
      totalNum={TEST_IMAGES.length}
    />
  );
});

it("should match snapshot", function () {
  const img = TEST_IMAGES[0];
  const { container } = render(
    <Card
      caption={img.caption}
      src={img.src}
      curNum={0}
      totalNum={TEST_IMAGES.length}
    />
  );
  expect(container).toMatchSnapshot();
});
