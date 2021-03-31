import React from 'react'
import CharacterList from '../heroes/CharacterList'

const DcScreen = () => {
  return (
    <div>
      <div className='font-extrabold text-xl text-center'>
        <h1 className="uppercase">DC Comics</h1>
      </div>
      <CharacterList publisher='DC Comics' />
    </div>
  )
}

export default DcScreen
