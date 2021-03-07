import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import stateData from "../../stateData.json";

const CompanyForm = (props) => {
  const { show, setShow, companiesAPI, setCompanies } = props;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [date, setDate] = useState(null);
  const [desc, setDesc] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    if (form.checkValidity() === true) {
      setShow(false);
    }

    setValidated(true);

    let details = {
      companyName: name,
      companyCity: city,
      companyState: state,
      companyDescription: desc,
      foundedDate: date,
    };

    console.log("date", date);

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(companiesAPI, {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        // "Access-Control-Allow-Credentials": true,
      },
    })
      // .then((newCompany) => setCompanies(newCompany.json()));
      .then((newCompany) => console.log(newCompany.json()));
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCompanyName">
                <Form.Label>Company Name:</Form.Label>
                <Form.Control
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  onChange={(event) => setCity(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  required
                  as="select"
                  defaultValue="Choose..."
                  onChange={(event) => setState(event.target.value)}
                >
                  <option disabled>Choose...</option>
                  {stateData.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Founded Date:</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(event) => setDate(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCompanyDesc">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CompanyForm;
