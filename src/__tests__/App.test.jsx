import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders shopping app", () => {
  render(<App />);
  expect(screen.getByText(/toggle/i)).toBeInTheDocument();
});
