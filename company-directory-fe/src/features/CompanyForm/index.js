import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import loadCompanies from "../../App";
import stateData from "../../stateData.json";

const CompanyForm = (props) => {
  const { show, setShow, companiesAPI, setTriggered } = props;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  const clearData = () => {
    setName("");
    setCity("");
    setState("");
    setDate("");
    setDesc("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let details = {
      companyName: name,
      companyCity: city,
      companyState: state,
      companyDescription: desc,
      foundedDate: date,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    if (name !== "" && city !== "" && state !== "" && desc !== "") {
      fetch(companiesAPI, {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then(setTriggered(true), clearData(), setShow(false));
    }
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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
