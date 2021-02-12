import React, { useEffect, useState } from 'react'
import useCounter from '../../hook/useCounter'
import useFetch from '../../hook/useFetch'
import { getCharacterByPublisher } from '../../selectors/getCharacterByPublisher'
import CharacterCard from './CharacterCard'

const CharacterList = ({ publisher }) => {
  const { counter, increment, reset } = useCounter(1)
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_BASE_URL}${counter}`)
  const [fullData, setfullData] = useState([])
  const [maxLoad, setMaxLoad] = useState(20)

  useEffect(() => {
    if (data !== null) {
      setfullData([...fullData, data])
    }

    if (counter <= maxLoad) {
      increment()
    }
  }, [data, maxLoad])
  const hero = getCharacterByPublisher(publisher, fullData)

  console.log(hero);

  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {hero.map(hero => (
            <CharacterCard
              key={hero.id}
              id={hero.id}
              name={hero.name}
              image={hero.image.url}
              alignment={hero.biography.alignment}
              gender={hero.appearance.gender}
              race={hero.appearance.race}
            />
          ))}
        </div>
        <div className='text-center'>
          {
            <button
              onClick={() => setMaxLoad(maxLoad + 20)}
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 mt-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-red-600 hover:bg-red-700 hover:text-gray-200'
            >
              Load more
          </button>}
        </div>
      </div>
    </div>
  )
}

export default CharacterList