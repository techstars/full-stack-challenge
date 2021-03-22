import React from 'react'
import { Button, Form, Modal, Row } from 'react-bootstrap'

const AddFounderModal = (props) => {
  const addFounder = (e, key) => {
    const updateNewFounderInfo = props.newFounderInfo
    updateNewFounderInfo[key] = e.target.value
    props.setNewFounderInfo(updateNewFounderInfo)
  }

  const saveFounder = () => {
    fetch(props.baseUrl + 'founder', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props.newFounderInfo)
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          console.log(res)
          props.setFounders([...props.founders, props.newFounderInfo])
        }
      })
      .catch((err) => {
        console.log(err)
      })
    props.setEditFounder(false)
  }

  return (
    <Modal
      size='lg'
      centered
      aria-labelledby='contained-modal-title-vcenter'
      show={props.editFounder}
      onHide={() => props.setEditFounder(false)}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Row className='p-2'>
            <Form.Label>Full Name:</Form.Label>
            <Form.Control type='text' onChange={(e) => addFounder(e, 'full_name')} />
          </Row>
          <Row className='p-2'>
            <Form.Label>Title:</Form.Label>
            <Form.Control type='text' onChange={(e) => addFounder(e, 'title')} />
          </Row>
        </Form.Group>
        <Button id='submit-button' type='submit' onClick={() => saveFounder()}>Save</Button>
      </Modal.Body>
    </Modal>
  )
}

export default AddFounderModal
