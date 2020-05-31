
import React from 'react'
import { Container } from 'react-bootstrap'
import CreateFounderForm from './components/CreateFounderForm'

const CreateFounder = () => {
  return (
    <Container className="container">
      <h2>Add Founder</h2>
      <CreateFounderForm />
    </Container>
  )
}

export default CreateFounder