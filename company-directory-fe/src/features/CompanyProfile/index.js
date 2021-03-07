import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import DeleteModal from "./DeleteModal";

const CompanyProfile = (props) => {
  const { selected, companiesAPI, setTriggered } = props;
  const [showDelete, setShowDelete] = useState(false);
  let date = new Date(selected.foundedDate);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let displayDate =
    months[date.getMonth()] +
    " " +
    date.getUTCDate() +
    "," +
    date.getUTCFullYear();

  return (
    <>
      <Card key={selected.id} className="m-3">
        <Card.Body>
          <Card.Title>{selected.companyName}</Card.Title>
          {selected.foundedDate.length > 0 ? (
            <Card.Subtitle className="mb-2">
              {displayDate} | {selected.companyCity}, {selected.companyState}
            </Card.Subtitle>
          ) : (
            <Card.Subtitle className="mb-2">
              {selected.companyCity}, {selected.companyState}
            </Card.Subtitle>
          )}
          <Card.Text>{selected.companyDescription}</Card.Text>
        </Card.Body>
        <div className="m-5">
          <Button className="m-2">Edit</Button>
          <Button className="m-2" onClick={() => setShowDelete(true)}>
            Delete
          </Button>
        </div>
      </Card>
      <DeleteModal
        showDelete={showDelete}
        setShowDelete={setShowDelete}
        selected={selected}
        companiesAPI={companiesAPI}
        setTriggered={setTriggered}
      />
    </>
  );
};

export default CompanyProfile;
