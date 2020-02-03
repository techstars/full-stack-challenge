import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import {getLocation} from '../../helpers/utils'
import _ from 'lodash';

const CompanyCard = props => {
  const company = props.company || {};
  const showEdit = (!_.isNil(props.showEdit)? props.showEdit :true);
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="">
          {showEdit && <Link to={{ pathname: `/companies/${company.id}`, state: {company:company} }} href="#" style={{float:"right"}}>  
            View...
          </Link>}
          <Card.Title>{company.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{getLocation(company)}</Card.Subtitle>
          <Card.Text>{company.description}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CompanyCard;