import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DeleteModal = (props) => {
  const {
    showDelete,
    setShowDelete,
    selected,
    companiesAPI,
    setTriggered,
  } = props;
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  console.log(selected);

  const deleteCompany = () => {
    fetch(companiesAPI + `/${selected.id}`, {
      method: "DELETE",
    }).then(setTriggered(true), setShowDelete(false));
  };

  return (
    <>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You will be deleting {selected.companyName} from the Company
          Directory.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Link to="/">
            <Button variant="primary" onClick={deleteCompany}>
              Yes, Delete!
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
