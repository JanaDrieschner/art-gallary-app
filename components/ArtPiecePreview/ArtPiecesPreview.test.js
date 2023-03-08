import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

const example = {
  slug: "orange-red-and-green",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  artist: "Steve Johnson",
  name: "Orange Red and Grenn Abstract Painting",
};

test("render an artist", () => {
  render(<ArtPiecePreview pieces={example} />);

  const testArtist = screen.getByText(example.artist);

  expect(testArtist).toBeInTheDocument();
});

test("render a title", () => {
  render(<ArtPiecePreview pieces={example} />);

  const testTitle = screen.getByText(example.name);

  expect(testTitle).toBeInTheDocument();
});

test("render an image", () => {
  render(<ArtPiecePreview peace={example} />);

  const testImage = screen.getByRole("Image");

  expect(testImage).toBeInTheDocument();
});
