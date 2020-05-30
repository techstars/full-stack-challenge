
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

const CompanyCard = ({ company }) => {
  return (
    <Container className="card" key={'company-' + company.id}>
      <Row>
        <Col>
          <h3>{company.name}</h3>
        </Col>
        <Col className="company-location">{company.city + ', ' + company.state}</Col>
        <Col className="company-link">
          <Link to={'/' + company.id}>more...</Link>
        </Col>
      </Row>
      <Row>
        <Col>{company.description}</Col>
      </Row>
    </Container>
  )
}

export default CompanyCard