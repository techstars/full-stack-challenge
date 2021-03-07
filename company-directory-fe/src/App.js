import React, { useState, useEffect } from "react";
import CompanyCard from "./features/CompanyCard";
import CompanyForm from "./features/CompanyForm";
import { Button } from "react-bootstrap";

// const companiesAPI = "http://localhost:3002/companies";
const companiesAPI = `http://companydirectoryts.herokuapp.com/companies`;

const App = () => {
  const [companies, setCompanies] = useState();
  const [show, setShow] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    fetch(companiesAPI)
      .then((companies) => companies.json())
      .then((companies) => setCompanies(companies))
      .then(setTriggered(false));
  }, [triggered]);

  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <h1 className="text-center m-3">Company Directory</h1>
      <CompanyCard companies={companies} setCompanies={setCompanies} />
      <div className="text-center m-3">
        <Button onClick={handleShow}>Add Company</Button>
      </div>
      <CompanyForm
        show={show}
        setShow={setShow}
        companiesAPI={companiesAPI}
        setTriggered={setTriggered}
      />
    </div>
  );
};

export default App;
