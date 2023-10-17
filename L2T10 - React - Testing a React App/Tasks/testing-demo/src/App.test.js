import App from "./App";
import renderer from "react-test-renderer";

test("App renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test("increments the count", () => {
//   const { getByText } = render(<App />);
//   const incrementButton = getByText("Increment");
//   fireEvent.click(incrementButton);
//   expect(getByText("Count: 1")).toBeInTheDocument();
// });

// // Once it has been increased by 1 decrement to 0
// test("decrements the count", () => {
//   const { getByText } = render(<App />);
//   const decrementButton = getByText("Decrement");
//   fireEvent.click(decrementButton);
//   expect(getByText("Count: -1")).toBeInTheDocument();
// });
