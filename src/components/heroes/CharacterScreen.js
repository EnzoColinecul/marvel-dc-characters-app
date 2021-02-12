import React from 'react'
import { useParams } from 'react-router-dom'
import { getCharacterById } from '../../selectors/getCharacterById';

const CharacterScreen = () => {
  const params = useParams()
  console.log(params);
  return (
    <div>
      <h1>CharacterScreen</h1>
    </div>
  )
}

export default CharacterScreen
