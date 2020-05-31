
import React from 'react'
import { Container } from 'react-bootstrap'

import CreateCompanyForm from './components/CreateCompanyForm'

const CreateCompany = () => {
  return (
    <Container className="container">
      <h3>Create A New Company</h3>
      <CreateCompanyForm />
    </Container>
  )
}

export default CreateCompany