
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Companies from './pages/Companies/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Companies />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
