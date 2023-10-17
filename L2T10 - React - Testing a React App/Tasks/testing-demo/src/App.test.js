import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("App renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("increments the count", () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText("Increment");
  fireEvent.click(incrementButton);
  expect(getByText("Count: 1")).toBeInTheDocument();
});
