import { render, screen } from '@testing-library/react';
import App from './App';

test("Test First React app case", () => {
  render(<App />);
  const text = screen.getByText(/first react test case/i);
  const text2 = screen.getByText("Hello World");
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
})

test("Testing Input Box", () => {
  render(<App />)
  let checkInput = screen.getByRole("textbox");
  let checkPlaceholder = screen.getByPlaceholderText("Enter User Name");

  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
  expect(checkInput).toHaveAttribute("value", "Anil Sindhu");
})
