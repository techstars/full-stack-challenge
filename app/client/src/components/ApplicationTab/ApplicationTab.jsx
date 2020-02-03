import React, { useState, useEffect } from "react";
import CompanyListContainer from "./CompanyListContainer";
import { Switch, Route } from 'react-router-dom';
import NewCompanyForm from "./NewCompanyForm";
import apiServices from "../../services/applicationTab";
import ViewCompany from "./ViewCompany";
import EditCompanyForm from "./EditCompanyForm"
import NewFounderForm from "./NewFounderForm"

const initialState = {
  companyList: []
};

const ApplicationTab = (props) => {
  const [state, setState] = useState(initialState);
  
  const errorHandler = errorMessage => {
    console.log(errorMessage)
  }

  const addNewCompany = (payload) => {
    apiServices
      .addNewCompany(payload)
      .then((response)=> {
        fetchCompanyList();
      })
  }
  const addNewFounder = (payload) => {
    apiServices
      .addNewFounder(payload)
      .then((response)=> {
        fetchCompanyList();
      })
  }
  const updateCompanyDetails = (payload) => {
    apiServices
      .updateCompanyDetails(payload)
      .then((response)=> {
        fetchCompanyList();
      })
  }
  const deleteCompany = (payload) => {
    apiServices
      .deleteCompany(payload)
      .then((response)=> {
        fetchCompanyList();
      })
  }
  const fetchCompanyList = () => {
    apiServices
      .fetchCompanyList({})
      .then(companyList => {
        setState({
          companyList
        });
      })
      .catch(err => errorHandler(err.message));
  };

  useEffect(() => {
    fetchCompanyList();
  }, []);

  return (
    <>
      <Switch>
        
        <Route exact path = '/' render= { (props)=> {
          return <CompanyListContainer
          companyList = {state.companyList}
            {...props}
          />;
        }}/>

        <Route exact path = '/add-company' render= { (props)=> {
          return <NewCompanyForm
            addNewCompany={addNewCompany}
            {...props}
          />;
        }}/>

        <Route exact path = '/companies/:id' render= { (props)=> {
          return <ViewCompany
            deleteCompany={deleteCompany}
            {...props}
          />;
        }}/>

        <Route exact path = '/companies/:id/edit' render= { (props)=> {
          return <EditCompanyForm
          updateCompanyDetails={updateCompanyDetails}
            {...props}
          />;
        }}/>

        <Route exact path = '/companies/:id/add-founder' render= { (props)=> {
          return <NewFounderForm
          addNewFounder={addNewFounder}
            {...props}
          />;
        }}/>

      </Switch>
    </>
  );
};
export default ApplicationTab;
