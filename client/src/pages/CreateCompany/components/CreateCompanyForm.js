
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Alert, Form, Button, Row, Col } from 'react-bootstrap'

const CreateCompanyForm = () => {
  const [error, setError] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [req, setReq] = useState({
    name: '',
    city: '',
    state: '',
    date_founded: null,
    description: ''
  })

  const handleOnChange = (e) => {
    setReq({
      ...req,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    const url = process.env.REACT_APP_SERVER_URL + '/companies'
    e.preventDefault()
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(req)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          setError(res)
          return
        }
        setError(null)
        setRedirect(true)
      })
  }

  if (redirect) {
    return <Redirect to="/"></Redirect>
  }
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Company Name:</Form.Label>
        <Form.Control onChange={handleOnChange} name="name" value={req.name} type="text" />
        <Form.Text className="text-muted">Required</Form.Text>
      </Form.Group>
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>City:</Form.Label>
            <Form.Control onChange={handleOnChange} name="city" value={req.city} type="text" />
            <Form.Text className="text-muted">Required</Form.Text>
          </Col>
          <Col>
            <Form.Label>State:</Form.Label>
            <Form.Control onChange={handleOnChange} name="state" value={req.state} type="text" />
            <Form.Text className="text-muted">Required</Form.Text>
          </Col>
          <Col>
            <Form.Label>Founded Date:</Form.Label>
            <Form.Control onChange={handleOnChange} name="date_founded" value={req.date} type="text" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Form.Label>Description:</Form.Label>
        <Form.Control onChange={handleOnChange} name="description" value={req.description} type="text" as="textarea" rows={5} />
        <Form.Text className="text-muted">Required</Form.Text>
      </Form.Group>
      {error && (
        <Alert variant="danger">
          {error.message}
        </Alert>
      )}
      <div className="form-buttons">
        <Button className="form-button" variant="success" type="submit">
          Submit
        </Button>
        <Button className="form-button" as={Link} variant="secondary" to="/">
          Cancel
        </Button>
      </div>
    </Form>
  )
}

export default CreateCompanyForm