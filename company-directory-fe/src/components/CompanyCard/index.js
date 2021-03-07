import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const companiesAPI = `https://companydirectoryts.herokuapp.com/companies`;

const CompanyCard = () => {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    fetch(companiesAPI)
      .then((companies) => companies.json())
      .then((companies) => setCompanies(companies));
  }, []);

  console.log("companies", companies);
  return (
    <div>
      {companies?.map((company) => (
        <Card className="m-3">
          <Card.Body>
            <Card.Title>{company.companyName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {company.companyCity}, {company.companyState}
            </Card.Subtitle>
            <Card.Text>
              {company.companyDescription.slice(0, 115)}{" "}
              <Card.Link href="#">...more</Card.Link>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CompanyCard;
