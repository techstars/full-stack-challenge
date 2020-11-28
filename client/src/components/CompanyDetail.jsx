import React, { useState, useEffect } from 'react';
import CompanyForm from './CompanyForm';

const CompanyDetail = ({ company }) => {
  const[name, updateName] = useState(company.name);
  const[city, updateCity] = useState(company.city);
  const[state, updateState] = useState(company.state);
  const[founded, updateFounded] = useState(company.founded);
  const[description, updateDescription] = useState(company.description);

  useEffect(() => {
    let date = new Date(company.founded);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleString('en-US', options)
    updateFounded(date)
  }, [])

  return (
    <div className="company-wrapper">

      <h3>{company.name}</h3>
      <p>{founded}</p>
      <p>{`${company.city}, ${company.state}`}</p>
      <p className ="company-description">{company.description}</p>
      <CompanyForm company={company} />

  </div>
  )
}

export default CompanyDetail;