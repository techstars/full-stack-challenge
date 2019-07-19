import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompanyType from '../types/company';
import Company from './Company';

class CompanyContainer extends Component {
  constructor(props) {
    super(props);

    const { companies } = this.props;

    this.state = {
      companies,
    };
  }

  render() {
    const { companies } = this.state;
    return (
      <ul>
        {companies.map(company => <Company key={company.id} {...company} />)}
      </ul>
    );
  }
}

export default CompanyContainer;

CompanyContainer.propTypes = {
  companies: CompanyType.isRequired,
};
