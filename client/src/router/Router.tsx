import React from 'react'
import { Route } from 'react-router-dom'

import ROUTES from './routes'
import CompanyList from '../components/CompanyList'
import CompanyDetail from '../components/CompanyDetail'
import AddCompany from '../components/AddCompany'

function Router() {
  // TODO ADD 404 BOUNDARY
  return (
    <>
      <Route exact path={ROUTES.companies} component={CompanyList} />
      <Route exact path={ROUTES.company} component={CompanyDetail} />
      <Route exact path={ROUTES.addCompany} component={AddCompany} />
    </>
  )
}

export default Router
