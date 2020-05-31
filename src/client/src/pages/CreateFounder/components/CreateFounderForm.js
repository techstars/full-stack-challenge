
import React, { useState } from 'react'
import { Alert, Form, Button } from 'react-bootstrap'
import { useParams, Redirect, Link } from 'react-router-dom'


const CreateFounderForm = () => {
  const params = useParams()
  const [error, setError] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [req, setReq] = useState({
    first_name: '',
    last_name: '',
    title: '',
    company_id: params.id
  })

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
    const url = process.env.REACT_APP_BFF + '/founders'
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
      .then(handleResponse)
      .catch(err => console.error(err))
  }

  if (redirect) {
    return <Redirect to={'/' + params.id}></Redirect>
  }

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name:</Form.Label>
        <Form.Control onChange={handleOnChange} name="first_name" value={req.first_name} type="text" />
        <Form.Text className="text-muted">Required</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name:</Form.Label>
        <Form.Control onChange={handleOnChange} name="last_name" value={req.last_name} type="text" />
        <Form.Text className="text-muted">Required</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Title Name:</Form.Label>
        <Form.Control onChange={handleOnChange} name="title" value={req.title} type="text" />
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
        <Button className="form-button" as={Link} variant="secondary" to={'/' + params.id}>
          Cancel
      </Button>
      </div>
    </Form>
  )
}

export default CreateFounderForm