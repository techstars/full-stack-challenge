import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import {getLocation} from '../../helpers/utils'
import _ from 'lodash';
import Button from 'react-bootstrap/Button'

const FoundersCard = props => {
  const {company} = props || {}
  const founders = company.founders || [];
  const getFoundersName =(founders) => {
    return _.map(founders, 'name').join(" | ");
  }
  
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="">
          <Card.Title>Founders</Card.Title>
          <Card.Text>{getFoundersName(founders)}</Card.Text>
        <Link to={{ pathname: `/companies/${company.id}/add-founder`, state: {company:company} }} href="#" style={{float:"right"}}>  
          <Button className="mr-3" variant="info">Add Founder </Button>
        </Link>
        </div>

      </Card.Body>

    </Card>
  )
}

export default FoundersCard;