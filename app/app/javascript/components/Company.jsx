import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ name }) => (
  <li>
    <p>{name}</p>
  </li>
);

export default Company;

Company.propTypes = {
  name: PropTypes.string.isRequired,
};
