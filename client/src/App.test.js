import React from 'react';
import App from './App';
import PlayerCard from './components/PlayerCards'
import { render } from '@testing-library/react'
import PlayerCards from './components/PlayerCards';

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

test('test to make sure individual items are displayed properly', () => {
  const Name = 'name'
  const Country = 'country'
  const PlayerCard = render(<PlayerCards name={Name} country={Country} />)
  PlayerCard.getByText(`${Name} playing for ${Country}`)
})