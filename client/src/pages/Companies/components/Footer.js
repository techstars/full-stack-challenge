
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar className="footer" fixed="bottom">
      <Button as={Link} variant="success" to="/new">Add Company</Button>
    </Navbar>
  )
}

export default Footer