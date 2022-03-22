import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({
  fullName,
  name,
  image,
  alignment,
  gender,
  race,
  id
}) => {
  return (

    <div className="my-1 px-10 w-full sm:w-1/2 md:w-1/2 lg:px-8 lg:w-72 hover:opacity-75 ">

      <article className="overflow-hidden rounded-lg shadow-lg bg-white">

        <Link to={`/character/${id}`}>
          <img alt={name} className="block h-auto w-full" src={image} />
        </Link>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <p className="no-underline hover:underline text-black" href="#">
              {name}
            </p>
          </h1>
          <p className="text-gray-500 text-sm">
            Race: {race}
          </p>
        </header>
        <a className="flex items-center no-underline  text-black p-2 " >
          <p className="ml-2 text-sm">
            Alignment: {alignment}
          </p>
        </a>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <div className="flex items-center no-underline hover:underline text-black" href="#">
            <Link to={`/character/${id}`} className="text-sm ">
              See more...
            </Link>
          </div>
          <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Like</span>
            <i className="fa fa-heart"></i>
          </a>
        </footer>
      </article>
    </div>

  )
}

export default React.memo(HeroCard)
