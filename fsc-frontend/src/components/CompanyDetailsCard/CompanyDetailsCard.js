import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'util/formatter';

const CompanyDetailsCard = props => {
  const { company, theme, toggleEdit } = props;
  return (
    <div className='col-12'>
      <div className='card my-3'>
        <div className='card-body'>
          <h3 className='fsc-header-text'>{ company.name }</h3>
          <h4>{ company.city }, { company.state }</h4>
          <h5>{company.foundedDate && `Founded ${formatDate(company.foundedDate)}`}</h5>
          <p className='fsc-body-text'>{ company.description }</p>
          <div className='row'>
            <div className='col'>
              <button
                className={`btn btn-${theme} fsc-nav-text`}
                onClick={() => toggleEdit(true)}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CompanyDetailsCard.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    description: PropTypes.string,
    foundedDate: PropTypes.string,
    state: PropTypes.string
  }),
  theme: PropTypes.string.isRequired,
  toggleEdit: PropTypes.func.isRequired
}

export default CompanyDetailsCard;
