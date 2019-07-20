import React from 'react';
import CompanyType from '../types/company';

const Company = ({
  founded_date, name, city, state, description,
}) => (
  <li>
    <p>{ name }</p>
    <p>{ founded_date.toString() }</p>
    <p>{ city }</p>
    <p>{ state }</p>
    <p>{ description }</p>
  </li>
);

export default Company;

Company.propTypes = { ...CompanyType };
