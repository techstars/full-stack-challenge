import React from "react";
import CompanyCard from "./CompanyCard";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
const CompanyListContainer = props => {

  const ButtonWrapperStyle= {
    "display": "flex",
    "flex-direction": "row-reverse",
    "margin-bottom": "1rem"
  }
  const AddButtonStyle = {
    "float":"right"
  }
  const companyCards = props.companyList.map((company,index) => {
    return (
      <div
        className="ml-2" key={company.id}>
        <CompanyCard 
          company={company}
        />
      </div>
    );
  });

  return (
    <>
    <div style={ButtonWrapperStyle}>
      <Link to="/add-company" href="#">    
        <Button variant="info" style={AddButtonStyle}>Add Company</Button>
      </Link>
    </div>
    {companyCards}
    </>
  );
};
export default CompanyListContainer;
