import React from 'react';
import PropTypes from 'prop-types';

const FounderCard = props => {
  const { founder, theme } = props
  return (
    <div className='col-md-6 my-2'>
      <div className='card'>
        <div className='card-body'>
          <h4 className='fsc-header-text'>{founder.firstName} {founder.lastName}</h4>
          <h5 className='fsc-body-text'>{founder.title}</h5>
        </div>
      </div>
    </div>
  )
}

FounderCard.propTypes = {
  theme: PropTypes.string.isRequired,
  founder: PropTypes.object.isRequired
}

export default FounderCard;
