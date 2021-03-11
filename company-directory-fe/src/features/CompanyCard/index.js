import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompanyCard = (props) => {
  const { companies, setSelectedCompany } = props;

  return (
    <div>
      {companies?.map((company) => (
        <Card key={company.id} className="m-3">
          <Card.Body>
            <Card.Title>{company.companyName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {company.companyCity}, {company.companyState}
            </Card.Subtitle>
            <Card.Text>
              {company.companyDescription.length < 120
                ? company.companyDescription
                : company.companyDescription.slice(0, 120) + "..."}
            </Card.Text>
          </Card.Body>
          <Link
            to={`/companyProfile/${company.id}`}
            className="text-center mb-2"
          >
            <Card.Link
              id={company.id}
              onClick={() => setSelectedCompany(company)}
            >
              Company Profile
            </Card.Link>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default CompanyCard;
