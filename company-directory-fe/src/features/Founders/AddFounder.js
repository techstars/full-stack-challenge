import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { setFormBody } from "../../utils/setFormBody";

const AddFounder = (props) => {
  const {
    showAddFounder,
    setShowAddFounder,
    foundersAPI,
    selected,
    setTriggeredFounder,
  } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");

  let details = {
    founderFirstName: firstName,
    founderLastName: lastName,
    founderTitle: title,
    companyId: selected.id,
  };

  const handleFounderSubmit = (event) => {
    event.preventDefault();
    if (firstName !== "" && lastName !== "" && title !== "") {
      setFormBody(details, foundersAPI);
      setShowAddFounder(false);
      setTriggeredFounder(true);
    }
  };

  return (
    <>
      <Modal show={showAddFounder} onHide={() => setShowAddFounder(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Founder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFounderSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFounderFirst">
                <Form.Label>Founder First Name:</Form.Label>
                <Form.Control
                  required
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridFounderLast">
                <Form.Label>Founder Last Name:</Form.Label>
                <Form.Control
                  required
                  onChange={(event) => setLastName(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFounderTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  required
                  onChange={(event) => setTitle(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowAddFounder(false)}
              >
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

export default AddFounder;
