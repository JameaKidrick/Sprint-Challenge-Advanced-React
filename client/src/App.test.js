import React from 'react';
import App from './App';

import { render } from '@testing-library/react'

// INTEGRATION TEST FOR APP COMPONENT
// test('renders without crashing', () => {
//   render(<App />)
// });

// // UNIT TESTING
test('test to make sure the title is being displayed on DOM', () => {
  const { getByText } = render (<App />)
  getByText(/Women's World Cup 2019 Players/i)
})

test('test to make sure the title is being displayed on DOM', () => {
  const { getByPlaceholderText } = render (<App />)
  getByPlaceholderText(/Favorite player/i)
})