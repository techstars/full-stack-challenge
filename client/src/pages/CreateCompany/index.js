
import React from 'react'
import { Container } from 'react-bootstrap'

import CreateCompanyForm from './components/CreateCompanyForm'

const CreateCompany = () => {
  return (
    <Container>
      <h2>Create A New Company</h2>
      <CreateCompanyForm />
    </Container>
  )
}

export default CreateCompany