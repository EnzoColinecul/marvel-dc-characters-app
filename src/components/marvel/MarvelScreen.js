import React from 'react'
import CharacterList from '../heroes/CharacterList'

const MarvelScreen = () => {
  return (
    <div>
      <div className='font-extrabold text-xl text-center'>
        <h1 className="uppercase">Marvel Comics</h1>
      </div>
      <CharacterList publisher='Marvel Comics' />
    </div>
  )
}

export default MarvelScreen
