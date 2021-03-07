import React from "react";
import { Card } from "react-bootstrap";

const CompanyCard = (props) => {
  const { companies } = props;

  return (
    <div>
      {companies?.map((company) => (
        <Card key={company.id} className="m-3">
          <Card.Body>
            <Card.Title>{company.companyName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {company.companyCity}, {company.companyState}
            </Card.Subtitle>
            <Card.Text>{company.companyDescription.slice(0, 115)}...</Card.Text>
          </Card.Body>
          <Card.Link href="#" className="text-center mb-2">
            Company Profile
          </Card.Link>
        </Card>
      ))}
    </div>
  );
};

export default CompanyCard;
