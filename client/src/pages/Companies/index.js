
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'

const Companies = () => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const url = process.env.REACT_APP_SERVER_URL + '/companies'
    fetch(url)
      .then(res => res.json())
      .then(res => setCompanies(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {companies.map(company => {
        return (
          <Container className="company-card" key={'company-' + company.id}>
            <Row>
              <Col className="company-name">{company.name}</Col>
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
      })}
      <Navbar className="footer" fixed="bottom" style={{ background: '#fff' }}>
        <Navbar.Brand>
          <Button as={Link} variant="success" to="/new">Add Company</Button>
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Companies