import React, { useState } from "react";
import { Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import Founders from "../Founders";

const CompanyProfile = (props) => {
  const { selected, companiesAPI, foundersAPI, setTriggered } = props;
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

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
      <div className="container">
        <h1 className="text-center m-3 container">Company Profile</h1>
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
          <div className="mr-5 ml-5">
            <Button className="m-2" onClick={() => setShowUpdate(true)}>
              Edit
            </Button>
            <Button className="m-2" onClick={() => setShowDelete(true)}>
              Delete
            </Button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Founders foundersAPI={foundersAPI} selected={selected} />
          </div>
        </Card>
        <DeleteModal
          showDelete={showDelete}
          setShowDelete={setShowDelete}
          selected={selected}
          companiesAPI={companiesAPI}
          setTriggered={setTriggered}
        />
        <UpdateModal
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
          selected={selected}
          companiesAPI={companiesAPI}
          setTriggered={setTriggered}
        />
        <div className="text-center mb-2">
          <Link to="/">
            <Button>Back to Company Directory</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
