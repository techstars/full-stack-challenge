import React from 'react';
import PropTypes from 'prop-types';

const IndexPage = props => {
  return (
    <div>
      <h3>Hey how are you?</h3>
    </div>
  )
}

IndexPage.propTypes = {
  theme: PropTypes.string
}

export default IndexPage;
