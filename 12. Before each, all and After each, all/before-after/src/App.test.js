import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * o The following are the hooks
 * beforeEach --> runs before each test
 * beforeAll --> runs initially when the test start
 * 
 * afterEach --> runs after each test
 * afterAll --> runs after the completion of all the test
 */

// beforeAll(() => {
//   console.log("*********** before all hook***********")
// })

// beforeEach(() => {
//   console.log("********* Before each hook *************")
// })

test('renders learn react link 1', () => {
  console.log('test 1')
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 2', () => {
  console.log('test 2')
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 3', () => {
  console.log('test 3')
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 4', () => {
  console.log('test 4')
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 5', () => {
  console.log('test 5')
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// afterAll(() => {
//   console.log("___________ AFter all hook _________")
// })

afterEach(() => {
  console.log("__________ after each hook ______________")
})