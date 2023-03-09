import { render, screen } from "@testing-library/react";
import Navigation from ".";

const example = {
  slug: "orange-red-and-green",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  artist: "Steve Johnson",
  name: "Orange Red and Grenn Abstract Painting",
};

test("render the spotlight link", () => {
  render(<Navigation />);

  const testLink = screen.getByText("Spotlight");

  expect(testLink).toBeInTheDocument();
});

test("render pieces link", () => {
  render(<Navigation />);

  const testLink = screen.getByText("Pieces");

  expect(testLink).toBeInTheDocument();
});
