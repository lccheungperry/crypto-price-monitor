import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders Cryptocurrency Realtime Price title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cryptocurrency Realtime Price/i);
  expect(linkElement).toBeInTheDocument();
});
