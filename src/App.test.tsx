import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tax number', () => {
  render(<App />);
  const taxNumberElement = screen.getByTestId('tax-number');
  expect(taxNumberElement).toBeInTheDocument();
});
