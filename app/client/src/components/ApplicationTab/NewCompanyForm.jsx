import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const NewCompanyForm = (props) => {
    let name, city, state, description, founded_date;
    
    const newFormStyle = {
      margin:"auto",
      width:"50%"
    }
    const handleSubmit = event => {
        event.preventDefault()
        const payload = {
          name: name.value,
          city: city.value,
          state: state.value,
          founded_date: founded_date.value,
          description: description.value
        }
        props.addNewCompany(payload);
        props.history.push("/");
    }

    return (
        <div style={newFormStyle}>
          <h3 className="text-center">Add New Company</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="xyz">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={input => name = input} type="text" placeholder="Name..." required/>
            </Form.Group>
            <Form.Row>
            <Form.Group as={Col} controlId="xyz">
              <Form.Label>City</Form.Label>
              <Form.Control ref={input => city = input} type="text" placeholder="City..." required/>
            </Form.Group>
            <Form.Group as={Col} controlId="xyz">
              <Form.Label>State</Form.Label>
              <Form.Control ref={input => state = input} type="text" placeholder="State..." required />
            </Form.Group>
            <Form.Group as={Col} controlId="xyz">
              <Form.Label>Founded Date</Form.Label>
              <Form.Control ref={input => founded_date = input} type="date" required />
            </Form.Group>
            </Form.Row>
            <Form.Group controlId="xyz">
              <Form.Label>Description</Form.Label>
              <Form.Control ref={input => description = input} as="textarea" rows="3" placeholder="Description..." />
            </Form.Group>
            <Button type="submit" variant="info">Save </Button>
          </Form>
        </div>
    )
}

export default NewCompanyForm;
