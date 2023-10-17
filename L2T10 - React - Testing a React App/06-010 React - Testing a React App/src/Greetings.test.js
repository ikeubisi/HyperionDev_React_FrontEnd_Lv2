import renderer from "react-test-renderer";
import Greetings from "./components/Greetings";

// Snapshot Testing with Jest learned from
// Snapshot testing · jest (no date) Jest RSS.
// Available at: https://jestjs.io/docs/snapshot-testing (Accessed: 17 October 2023).
it("renders correctly", () => {
  const tree = renderer.create(<Greetings />).toJSON();
  expect(tree).toMatchSnapshot();
});
