
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Container, Form, Button } from 'react-bootstrap'

const CreateCompany = () => {
  const [error, setError] = useState(null)
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
    console.log(url)
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

        console.log(res)
      })
  }

  return (
    <Container>
      <h1>Create A New Company</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Company Name</Form.Label>
          <Form.Control onChange={handleOnChange} name="name" value={req.name} type="text" placeholder="Please enter company name..." />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control onChange={handleOnChange} name="city" value={req.city} type="text" placeholder="Please enter city..." />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control onChange={handleOnChange} name="state" value={req.state} type="text" placeholder="Please enter state..." />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Founded Date</Form.Label>
          <Form.Control onChange={handleOnChange} name="date" value={req.date} type="text" placeholder="Please enter founded date..." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={handleOnChange} name="description" value={req.description} type="text" as="textarea" placeholder="Please enter description..." />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
        {error && (
          <Alert variant="danger">
            {error.message}
          </Alert>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button as={Link} variant="secondary" to="/">
          Cancel
        </Button>
      </Form>
    </Container>
  )
}

export default CreateCompany