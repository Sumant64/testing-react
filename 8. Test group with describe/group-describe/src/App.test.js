import { render, screen } from '@testing-library/react';
import App from './App';


/**
 * Describe:
 *  o 
 */
describe("UI test case group", () => {
  test('check the text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('check the text 2', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });

})


describe("input test group", () => {
  test("Testing Input Box", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    let checkPlaceholder = screen.getByPlaceholderText("Enter User Name");
  
    expect(checkInput).toBeInTheDocument();
    expect(checkPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("id", "userId");
    expect(checkInput).toHaveAttribute("type", "text");
    expect(checkInput).toHaveAttribute("value", "Anil Sindhu");
  });

})


// =====================================================================
// describe.only()
// it will run only this test, and skip all other
// describe.only("UI test case group 2", () => {
//   test('check the text 1', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Hello World/i);
//     expect(linkElement).toBeInTheDocument();
//   });

//   test('check the text 2', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Hello World/i);
//     expect(linkElement).toBeInTheDocument();
//   });

// })


// =====================================================================
// describe.skip()
// it will skip this test
// describe.skip("UI test case group 3", () => {
//   test('check the text', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Hello World/i);
//     expect(linkElement).toBeInTheDocument();
//   });

// })

// ====================================================================
// embedded describe

describe("UI test case group 3", () => {
  test('check the text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });

  describe("UI test case group 3", () => {
    test('check the text', () => {
      render(<App />);
      const linkElement = screen.getByText(/Hello World/i);
      expect(linkElement).toBeInTheDocument();
    });
  
  })

})
