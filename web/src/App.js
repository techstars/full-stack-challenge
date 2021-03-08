import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompanyList from './components/companyList';
import CompanyDetails from './components/companyDetails';
import AddCompany from './components/addCompany';
import UpdateCompany from './components/updateCompany';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={CompanyList} />
      <Route exact path="/companies" component={CompanyList} />
      <Route exact path="/companies/new" component={AddCompany} />
      <Route exact path="/companies/:id/edit" component={UpdateCompany} />
      <Route path="/companies/:id" component={CompanyDetails} />
    </Switch>
  )
}
