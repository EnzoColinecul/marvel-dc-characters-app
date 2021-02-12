import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import LoginScreen from '../components/login/LoginScreen'
import DashbordRouter from './DashbordRouter'


const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route path='/' component={DashbordRouter} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
