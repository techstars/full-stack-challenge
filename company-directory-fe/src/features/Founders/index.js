import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import AddFounder from "./AddFounder";

const Founders = (props) => {
  const { foundersAPI, selected } = props;
  const [founders, setFounders] = useState();
  const [showAddFounder, setShowAddFounder] = useState(false);
  const [triggeredFounder, setTriggeredFounder] = useState(false);

  useEffect(() => {
    fetch(foundersAPI)
      .then((founders) => founders.json())
      .then((founders) => findFoundersOfCompany(founders))
      .then(setTriggeredFounder(false));
  }, [triggeredFounder]);

  const findFoundersOfCompany = (founderList) => {
    let founderArray = founderList.filter(
      (founder) => founder.companyId === selected.id
    );
    setFounders(founderArray);
  };

  return (
    <>
      <Card className="m-3" style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>
            <Row>
              {founders?.length === 0 ? (
                <p>There are no Founders on record for this company.</p>
              ) : (
                founders?.map((founder) => (
                  <Col key={founder.id} md="auto">
                    {founder.founderFirstName} {founder.founderLastName}:{" "}
                    <p className="text-muted">{founder.founderTitle}</p>
                  </Col>
                ))
              )}

              <Col className="text-right ml-5">
                <Button onClick={() => setShowAddFounder(true)}>
                  Add Founder
                </Button>
              </Col>
            </Row>
          </Card.Title>
        </Card.Body>
      </Card>
      <AddFounder
        showAddFounder={showAddFounder}
        setShowAddFounder={setShowAddFounder}
        foundersAPI={foundersAPI}
        selected={selected}
        setTriggeredFounder={setTriggeredFounder}
      />
    </>
  );
};

export default Founders;
