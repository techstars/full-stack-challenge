//React
import React from 'react'

//Styles
import './App.scss'

//Router
import { Router } from 'react-router-dom'
import Routes from './Components/Routes'
import { createBrowserHistory } from 'history'

const App: React.FC = (): JSX.Element => {
  const history = createBrowserHistory()

  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}

export default App
