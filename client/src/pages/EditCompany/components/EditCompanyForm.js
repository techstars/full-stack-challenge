
import React, { useState, useEffect } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import { Alert, Form, Button, Row, Col } from 'react-bootstrap'
import moment from 'moment'

const EditCompanyForm = () => {
  const params = useParams()
  const [error, setError] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [req, setReq] = useState({
    name: '',
    city: '',
    state: '',
    date_founded: ''
  })

  useEffect(() => {
    const url = 'companies/' + params.id
    fetch(url)
      .then(res => res.json())
      .then(res => setReq(res))
      .catch(err => console.error(err))
  }, [params])

  const handleOnChange = (e) => {
    setReq({
      ...req,
      [e.target.name]: e.target.value
    })
  }

  const handleResponse = (res) => {
    if (res.error) {
      setError(res)
      return
    }
    setError(null)
    setRedirect(true)
  }

  const handleSubmit = (e) => {
    const url = 'companies/' + params.id
    e.preventDefault()
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(req)
    })
      .then(res => res.json())
      .then(handleResponse)
      .catch(error => console.error(error))
  }

  if (redirect) {
    return <Redirect to={'/' + params.id}></Redirect>
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
            <Form.Control onChange={handleOnChange} name="date_founded" value={moment(req.date_founded).format('YYYY-MM-DD')} type="date" />
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

export default EditCompanyForm