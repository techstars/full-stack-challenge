import React, { useState, useEffect } from "react";
import CompanyCard from "./features/CompanyCard";
import CompanyForm from "./features/CompanyForm";
import { Button } from "react-bootstrap";

const companiesAPI = `https://companydirectoryts.herokuapp.com/companies`;

const App = () => {
  const [companies, setCompanies] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(companiesAPI)
      .then((companies) => companies.json())
      .then((companies) => setCompanies(companies));
  }, []);

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
        setCompanies={setCompanies}
      />
    </div>
  );
};

export default App;
