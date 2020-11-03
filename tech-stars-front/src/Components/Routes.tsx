//React
import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

//Components
import Companies from './Companies'
import CompanyForm from './FormComponents/CompanyForm'

//Modules
import { Endpoints } from '../Modules/endpoints.module'

const Routes: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route path={Endpoints.Companies} exact component={Companies} />
      <Route path={Endpoints.CreateCompany} exact component={CompanyForm} />
      <Route path={Endpoints.EditCompany} exact component={CompanyForm} />
      <Redirect to="/companies" />
    </Switch>
  )
}

export default Routes
