import { render, screen } from "@testing-library/react";
import Spotlight from ".";

const example = {
  slug: "orange-red-and-green",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  artist: "Steve Johnson",
  name: "Orange Red and Grenn Abstract Painting",
};

test("render the correct artist", () => {
  render(<Spotlight artist={example.artist} />);

  const testArtist = screen.getByText(example.artist);

  expect(testArtist).toBeInTheDocument();
});

test("render an image", () => {
  render(<Spotlight />);

  const testImage = screen.getByRole("img");

  expect(testImage).toBeInTheDocument();
});
