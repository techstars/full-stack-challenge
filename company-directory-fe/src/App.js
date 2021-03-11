import React, { useState, useEffect } from "react";
import CompanyCard from "./features/CompanyCard";
import CompanyForm from "./features/CompanyForm";
import CompanyProfile from "./features/CompanyProfile";
import { Button } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

const companiesAPI = `https://companydirectoryts.herokuapp.com/companies`;
const foundersAPI = `https://companydirectoryts.herokuapp.com/founders`;

const App = () => {
  const [companies, setCompanies] = useState();
  const [show, setShow] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const [selected, setSelectedCompany] = useState();

  useEffect(() => {
    fetch(companiesAPI)
      .then((companies) => companies.json())
      .then((companies) => setCompanies(companies))
      .then(setTriggered(false));
  }, [triggered]);

  const handleShow = () => setShow(true);

  return (
    <Switch>
      <Route path="/companyProfile">
        <CompanyProfile
          selected={selected}
          companiesAPI={companiesAPI}
          foundersAPI={foundersAPI}
          setTriggered={setTriggered}
        />
      </Route>
      <div className="container">
        <h1 className="text-center m-3">Company Directory</h1>
        <Route path="/">
          <CompanyCard
            companies={companies}
            setCompanies={setCompanies}
            setSelectedCompany={setSelectedCompany}
          />
        </Route>
        <div className="text-center m-3">
          <Button onClick={handleShow}>Add Company</Button>
        </div>
        <Route path="/">
          <CompanyForm
            show={show}
            setShow={setShow}
            companiesAPI={companiesAPI}
            setTriggered={setTriggered}
          />
        </Route>
      </div>
    </Switch>
  );
};

export default App;
