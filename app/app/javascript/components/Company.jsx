import React from 'react';
import CompanyType from '../types/company';

const Company = ({
  id, founded_date, name, city, state, description,
}) => {
  const date = new Date(founded_date);
  const dateString = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <li>
      <div className="row">
        <div className="nameplate">
          <h2>{ name }</h2>
          <span>{`${city}, ${state}`}</span>
        </div>
        <a href={`/companies/${id}`}>more...</a>
      </div>

      <hr />

      <p>{ description }</p>
      <span>
        {`Founded ${dateString}`}
      </span>
    </li>
  );
};

export default Company;

Company.propTypes = { ...CompanyType };
