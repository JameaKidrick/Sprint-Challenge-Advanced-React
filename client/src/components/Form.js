import React from 'react';
import { useInput } from '../hooks/useInput'

const Form = () => {
  const [fave, handleFave, setFave] = useInput('player', '')

  const handleSubmit = e => {
    e.preventDefault();
    setFave('')
  };

  return(
    <form >
      <input
      type='text'
      placeholder='Favorite player'
      onChange={handleFave}
      value={fave}
      />
      <button onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  )
}

export default Form;