import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'util/formatter';
import { Link } from 'react-router-dom';

const IndexCard = props => {
  const { company, theme } = props;

  return (
    <div className='col-12'>
      <div className='card my-3'>
        <div className='card-body'>
          <h4 className='fsc-header-text'>{ company.name }</h4>
          <h5>
            {company.foundedDate && `Founded ${formatDate(company.foundedDate)} | `}
            { company.city }, { company.state }
          </h5>
          <p className='fsc-body-text'>{ company.description }</p>
          <div className='row'>
            <div className='col'>
              <Link to={`companies/${company.id}`} className={`btn btn-${theme} fsc-nav-text`}>See More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

IndexCard.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    description: PropTypes.string,
    foundedDate: PropTypes.string,
    state: PropTypes.string
  }),
  theme: PropTypes.string.isRequired
}

export default IndexCard;
