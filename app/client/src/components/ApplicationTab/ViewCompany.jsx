import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import {getLocation} from '../../helpers/utils'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import CompanyCard from "./CompanyCard";
import _ from 'lodash';
import FoundersCard from "./FoundersCard";

const ViewCompany = props => {
  const {company} = props.location.state || {}

  const ButtonsWrapper = {
    margin: "auto",
    width: "20%",
    padding: "1rem",
  }

  const handleDelete = event => {
    props.deleteCompany({companyId: company.id})
    props.history.push("/");
  }
  
  if (_.isEmpty(company)) {
    props.history.push("/");
    return null;
  }

  return (
    <>
      <div style={ButtonsWrapper}>
        <Link to={{ pathname: `/companies/${company.id}/edit`, state: {company:company} }} href="#">  
          <Button className="mr-3" variant="info">Edit </Button>
        </Link>
        <Button variant="danger" onClick={handleDelete}>Delete </Button>
      </div>
      <CompanyCard company= {company} showEdit={false}/>
      <FoundersCard company={company}/>
    </>
  )
}

export default ViewCompany;