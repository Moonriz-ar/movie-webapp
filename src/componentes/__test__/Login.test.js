import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

test("Should show header of login form", async () => {
  render(<MockLogin />);
  const actualHeader = screen.getByRole("heading");
  expect(actualHeader).toBeDefined();
  expect(actualHeader).toBeTruthy();
  expect(actualHeader).toBeVisible();
  expect(actualHeader).toHaveTextContent(/formulario de submit/i);
});
