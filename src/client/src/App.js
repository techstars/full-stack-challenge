
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import CompanyById from './pages/CompanyById/index'
import Companies from './pages/Companies/index'
import CreateCompany from './pages/CreateCompany/index'
import CreateFounder from './pages/CreateFounder/index'
import EditCompany from './pages/EditCompany/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Companies} />
          <Route path="/new" component={CreateCompany} />
          <Route exact path="/:id" component={CompanyById} />
          <Route exact path="/:id/edit" component={EditCompany} />
          <Route path="/:id/founders/new" component={CreateFounder} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
