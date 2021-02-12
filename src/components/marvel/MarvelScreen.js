import React from 'react'
import CharacterList from '../heroes/CharacterList'

const MarvelScreen = () => {
  return (
    <div>
      <div className='font-extrabold text-xl text-center'>
        <h5>Marvel Comics</h5>
      </div>
      <CharacterList publisher='Marvel Comics' />
    </div>
  )
}

export default MarvelScreen
