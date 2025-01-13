import { render, screen } from '@testing-library/react';
import App from './App';

// test("Test First React app case", () => {
//   render(<App />);
//   const text = screen.getByText("First React Test Case");
//   expect(text).toBeInTheDocument();
// })

// =================================================
// error even if change the case of text

// test("Test First React app case", () => {
//   render(<App />);
//   const text = screen.getByText("First React Test case"); // it will give error
//   expect(text).toBeInTheDocument();
// })

// ===========================================
// using regex for the case insensitive

// test("Test First React app case", () => {
//   render(<App />);
//   const text = screen.getByText(/first react test case/i);
//   expect(text).toBeInTheDocument();
// })

// ==============================================
// testing text and image title both

test("Test First React app case", () => {
  render(<App />);
  const text = screen.getByText(/first react test case/i);
  const title = screen.getByTitle("AI generated image");
  const text2 = screen.getByText("Hello World");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
})
