import React, { useState } from 'react'
import './CreateNewCompany.scss'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'

const CompanyTile = (props) => {
  const [newCompany, setNewCompany] = useState({ name: null, city: null, state: null, description: null, founded_date: null })

  const newCompanyFormData = (e, key) => {
    const updateCompanyData = newCompany
    updateCompanyData[key] = e.target.value
    setNewCompany(updateCompanyData)
  }

  const submitNewCompany = (e) => {
    e.preventDefault()
    fetch(props.baseUrl + 'company', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCompany)
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          props.setCompanies([...props.companies, newCompany])
          setNewCompany({})
          props.setAddCompanyModalOpen(false)
        }
      })
      .catch((err) => {
        console.log(err)
        props.setAddCompanyModalOpen(false)
      })
  }

  return (
    <Container>
      <Form>
        <Row className='p-2'>
          <Form.Group controlId='validationCustom01'>
            <Form.Label>Company Name:</Form.Label>
            <Form.Control
              id='company-name'
              required
              type='text'
              onChange={e => newCompanyFormData(e, 'name')}
            />
          </Form.Group>
        </Row>
        <Row className='p-2'>
          <Col xs={6} md={4}>
            <Form.Group controlId='validationCustom02'>
              <Form.Label>City:</Form.Label>
              <Form.Control
                id='city'
                required
                type='text'
                onChange={e => newCompanyFormData(e, 'city')}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group controlId='validationCustom03'>
              <Form.Label>State:</Form.Label>
              <Form.Control
                id='state'
                required
                type='text'
                onChange={e => newCompanyFormData(e, 'state')}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group controlId='validationCustom04'>
              <Form.Label>Founded Date:</Form.Label>
              <Form.Control
                id='date'
                type='date'
                name='foundedDate'
                onChange={e => newCompanyFormData(e, 'founded_date')}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='p-2'>
          <Form.Group controlId='validationCustom05'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              id='description'
              as='textarea'
              aria-label='With textarea'
              onChange={e => newCompanyFormData(e, 'description')}
            />
          </Form.Group>
        </Row>
        <Button id='submit-button' type='submit' onClick={(e) => submitNewCompany(e)}>Save</Button>
      </Form>
    </Container>
  )
}

export default CompanyTile
