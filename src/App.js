import React, { useReducer, useState } from 'react'
import AppRouter from './routers/AppRouter'
import DataContext from './components/context/DataContext'
import AuthContext from './auth/AuthContext'
import { authReducer } from './auth/authReducer'


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const App = () => {
  const [fullData, setfullData] = useState([])
  const [user, dispatch] = useReducer(authReducer, {}, init)

  return (
    <AuthContext.Provider value={{user, dispatch}}>
      <DataContext.Provider value={{ fullData, setfullData }}>
        <AppRouter />
      </DataContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
