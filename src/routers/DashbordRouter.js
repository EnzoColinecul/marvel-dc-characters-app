import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import DcScreen from '../components/dc/DcScreen'
import CharacterScreen from '../components/heroes/CharacterScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import NavBar from '../components/ui/NavBar'

const DashbordRouter = () => {
  return (
    <>
      <NavBar />
      <div className='p-4'>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/character/:characterId' component={CharacterScreen} />
          <Route exact path='/dc' component={DcScreen} />

          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  )
}

export default DashbordRouter
