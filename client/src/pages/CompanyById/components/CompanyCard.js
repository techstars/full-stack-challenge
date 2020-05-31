
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import { Container, Col, Row, Button } from 'react-bootstrap'
import FoundersCard from './FoundersCard'
import DeleteButton from './DeleteButton'

const CompanyCard = () => {
  const [company, setCompany] = useState({})
  const params = useParams()

  useEffect(() => {
    const url = process.env.REACT_APP_SERVER_URL + '/companies/' + params.id

    fetch(url)
      .then(res => res.json())
      .then(res => setCompany(res))
      .catch(err => console.error(err))
  }, [params])

  return (
    <Container className="card">
      <Row className="company-name-by-id"><h1>{company.name}</h1></Row>
      <Row>
        <Col className="company-date-by-id">{company.date_founded ? moment(company.date_founded).format('MMMM Do YYYY') : 'Date Founded TBD'}</Col>
        <Col className="company-location-by-id">{company.city + ', ' + company.state}</Col>
        <Col>
          <Button className="buttons" as={Link} to={'/' + params.id + '/edit'} variant="success">Edit</Button>
          <DeleteButton />
        </Col>
      </Row>
      <Row>
        <Col className="company-description-by-id">{company.description}</Col>
      </Row>
      <FoundersCard />
    </Container>
  )
}

export default CompanyCard