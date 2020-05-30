
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import CreateCompany from './pages/CreateCompany/index'
import CompanyById from './pages/CompanyById/index'
import Companies from './pages/Companies/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Companies} />
          <Route path="/new" component={CreateCompany} />
          <Route path="/:id" component={CompanyById} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
