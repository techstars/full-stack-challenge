import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import stateData from "../../stateData.json";

const UpdateModal = (props) => {
  const {
    showUpdate,
    setShowUpdate,
    selected,
    companiesAPI,
    setTriggered,
  } = props;
  const [name, setName] = useState(selected.companyName);
  const [city, setCity] = useState(selected.companyCity);
  const [state, setState] = useState(selected.companyState);
  const [date, setDate] = useState(selected.foundedDate);
  const [desc, setDesc] = useState(selected.companyDescription);
  const handleClose = () => setShowUpdate(false);

  const updateCompany = () => {
    let update = {
      companyName: name,
      companyCity: city,
      companyState: state,
      companyDescription: desc,
      foundedDate: date,
    };

    let formBody = [];
    for (let property in update) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(update[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    if (name !== "" && city !== "" && state !== "" && desc !== "") {
      fetch(companiesAPI + `/${selected.id}`, {
        method: "PUT",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then(setTriggered(true), setShowUpdate(false));
    }
  };

  return (
    <>
      <Modal show={showUpdate} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCompanyName">
                <Form.Label>Company Name:</Form.Label>
                <Form.Control
                  required
                  defaultValue={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  defaultValue={city}
                  onChange={(event) => setCity(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  required
                  as="select"
                  defaultValue={state}
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
                  defaultValue={date}
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
                  defaultValue={desc}
                  as="textarea"
                  rows={3}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Link to="/">
            <Button variant="primary" onClick={updateCompany}>
              Save
            </Button>
          </Link>
          You will be brought back to the Company Directory upon save.
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateModal;
