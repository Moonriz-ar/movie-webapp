import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Login from "../Login";

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe("Test login component", () => {
  test("Should render header", async () => {
    render(<MockLogin />);
    const actualHeader = screen.getByRole("heading");
    expect(actualHeader).toBeDefined();
    expect(actualHeader).toBeVisible();
    expect(actualHeader).toBeInTheDocument();
    expect(actualHeader).toHaveTextContent(/login form/i);
  });

  test("Should render email input element", async () => {
    render(<MockLogin />);
    const actualEmailInput = screen.getByPlaceholderText(
      /Please enter email.../i
    );
    expect(actualEmailInput).toBeInTheDocument();
  });

  test("Should be able to type into email input", async () => {
    render(<MockLogin />);
    const actualEmailInput = screen.getByPlaceholderText(
      /Please enter email.../i
    );
    fireEvent.change(actualEmailInput, {
      target: { value: "challenge@alkemy.org" },
    });
    expect(actualEmailInput.value).toBe("challenge@alkemy.org");
  });

  test("Should render password input element", async () => {
    render(<MockLogin />);
    const actualPasswordInput = screen.getByPlaceholderText(
      /Please enter password.../i
    );
    expect(actualPasswordInput).toBeInTheDocument();
  });

  test("Should be able to type into password input", async () => {
    render(<MockLogin />);
    const actualPasswordInput = screen.getByPlaceholderText(
      /Please enter password.../i
    );
    fireEvent.change(actualPasswordInput, {
      target: { value: "react" },
    });
    expect(actualPasswordInput.value).toBe("react");
  });
});
