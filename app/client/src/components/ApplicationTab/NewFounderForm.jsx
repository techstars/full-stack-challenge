import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const NewFounderForm = (props) => {
    let name, title;
    const {company} = props.location.state || {}
    const newFormStyle = {
      margin:"auto",
      width:"50%"
    }

    const handleSubmit = event => {
        event.preventDefault()
        const payload = {
          name: name.value,
          title: title.value,
          company_id: company.id
        }
        props.addNewFounder(payload);
        props.history.push("/");
    }

    return (
        <div style={newFormStyle}>
          <h3 className="text-center"> Add New Founder</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="xyz">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={input => name = input} type="text" placeholder="Name..." required/>
            </Form.Group>
            <Form.Group controlId="xyz">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={input => title = input} type="text" placeholder="City..." required/>
            </Form.Group>
            <Button type="submit" variant="info">Save </Button>
          </Form>
        </div>
    )
}

export default NewFounderForm;
