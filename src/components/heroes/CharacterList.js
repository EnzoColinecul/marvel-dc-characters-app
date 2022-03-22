import React, {useContext, useEffect, useMemo, useState } from 'react'
import useCounter from '../../hook/useCounter'
import useFetch from '../../hook/useFetch'
import { getCharacterByPublisher } from '../../selectors/getCharacterByPublisher'
import CharacterCard from './CharacterCard'
import DataContext from '../context/DataContext'
import Loading from '../../assets/animations/loadingAnimation.svg'


const CharacterList = ({ publisher }) => {
  const { counter, increment } = useCounter(1)
  const { data, loading } = useFetch(`${process.env.REACT_APP_BASE_URL}${counter}`)
  const { fullData, setfullData } = useContext(DataContext)
  const [maxLoad, setMaxLoad] = useState(20)


  useEffect(() => {
    if (data !== null) {
      setfullData([...fullData, data])
    }
    console.log(data);
  }, [fullData])

  useEffect(() => {
    if (counter <= maxLoad) {
      increment()
    }
    console.log(counter);
  }, [data, maxLoad])
  
  const character = useMemo(() => getCharacterByPublisher(publisher, fullData), [publisher]) 

  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4 place-content-center">
          {loading ?
            (<div className="justify-center">
              <img className="animate-spin w-16 items-center content-center opacity-10" src={Loading} />
            </div>
            ) :
            character.map(character => (
              <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image.url}
                alignment={character.biography.alignment}
                gender={character.appearance.gender}
                race={character.appearance.race}
              />
            ))}
        </div>
        <div className='text-center'>
          <button
            onClick={() => setMaxLoad(maxLoad + 20)}
            className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 mt-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-red-600 hover:bg-red-700 hover:text-gray-200'
          >
          Load More
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterList