import React from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'

const EditCompanyModal = (props) => {
  return (
    <Modal
      size='lg'
      centered
      aria-labelledby='contained-modal-title-vcenter'
      show={props.editCompany}
      onHide={() => props.setEditCompany(false)}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Row className='p-2'>
            <Form.Label>Company Name:</Form.Label>
            <Form.Control type='text' placeholder={props.companyDetails.name} onChange={(e) => props.updateDetails(e, 'name')} />
          </Row>
          <Row className='p-2'>
            <Col xs={6} md={4}>
              <Form.Label>City:</Form.Label>
              <Form.Control type='text' placeholder={props.companyDetails.city} onChange={(e) => props.updateDetails(e, 'city')} />
            </Col>
            <Col xs={6} md={4}>
              <Form.Label>State:</Form.Label>
              <Form.Control type='text' placeholder={props.companyDetails.state} onChange={(e) => props.updateDetails(e, 'state')} />
            </Col>
            <Col xs={6} md={4}>
              <Form.Group controlId='validateFoundedDate'>
                <Form.Label>Founded Date:</Form.Label>
                <Form.Control
                  placeholder={props.companyDetails.date}
                  id='date'
                  type='date'
                  name='foundedDate'
                  onChange={e => props.updateDetails(e, 'founded_date')}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='p-2'>
            <Form.Label>Description:</Form.Label>
            <Form.Control type='text' placeholder={props.companyDetails.description} onChange={(e) => props.updateDetails(e, 'description')} />
          </Row>
        </Form.Group>
        <Button id='submit-button' type='submit' onClick={() => props.saveDetails()}>Save</Button>
      </Modal.Body>
    </Modal>
  )
}

export default EditCompanyModal
