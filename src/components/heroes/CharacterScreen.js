import React, { useContext } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getCharacterById } from '../../selectors/getCharacterById';
import DataContext from '../context/DataContext'

const CharacterScreen = ({ history }) => {
  const { characterId } = useParams()
  const { fullData } = useContext(DataContext)
  const hero = getCharacterById(characterId, fullData)

  if (!hero) {
    return <Redirect to='/marvel' />
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/')
    } else {
      history.goBack()
    }
  }

  const {
    name,
    powerstats,
    biography,
    appearance,
    image
  } = hero

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        {/* 				<!-- Row -->*/}
        <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
          {/* <!-- Col --> */}
          <img
            src={image.url}
            alt={name}
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          />
          {/* <!-- Col --> */}
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-left ">
              <h3 className="pt-4 mb-2 text-2xl text-center">{name}</h3>
              <h1 className="text-xl font-bold">Appereance</h1>
              <ul className="mb-4 text-lg text-gray-700 col-auto">
                <li> Gender: {appearance.gender}</li>
                <li> Race: {appearance.race}</li>
                <li> Weight: {appearance.weight[1]}</li>
                <li> Height: {appearance.height[1]}</li>
              </ul>
            </div>
            <div className="px-8 mb-4 text-left ">
              <h1 className="text-xl font-bold">Biography</h1>
              <ul className="mb-4 text-lg text-gray-700 col-auto">
                <li>Aliases: {biography.aliases[0]}</li>
                <li>First Appearance: {biography.first - appearance}</li>
              </ul>
              <button
                onClick={handleReturn}
                className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 mt-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-red-600 hover:bg-red-700 hover:text-gray-200'
              >
                Return
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterScreen
