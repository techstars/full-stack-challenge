
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Col, Button, Row } from 'react-bootstrap'

const FoundersCard = () => {
  const params = useParams()
  const [founders, setFouders] = useState([])

  useEffect(() => {
    const url = process.env.REACT_APP_BFF + '/companies/' + params.id + '/founders'
    fetch(url)
      .then(res => res.json())
      .then(res => setFouders(res))
      .catch(err => console.error(err))
  }, [params])

  return (
    <>
      <h4>Founders</h4>
      <Container className="card">
        <Row>
          <Col className="founders">
            {founders.length > 0
              ? founders.map(founder => <h6 className="founder" key={'founder-' + founder.id}>{founder.first_name} {founder.last_name}: {founder.title}</h6>)
              : (
                <div className="founders-placeholder">
                  <p>No Founders Added</p>
                </div>
              )}
          </Col>
          <Col className="add-founder-button" xs={3}>
            <Button as={Link} variant="success" to={'/' + params.id + '/founders/new'}>Add Founder</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FoundersCard