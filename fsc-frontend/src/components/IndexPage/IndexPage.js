import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const IndexPage = props => {
  const { getAllCompanies } = props;

  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await getAllCompanies();
      setCompanies(response);
    }
    fetchCompanies();
  }, [getAllCompanies]);

  console.log(companies);

  return (
    <div>
      <h3 className='fsc-body-text'>Hey how are you?</h3>
    </div>
  )
}

IndexPage.propTypes = {
  theme: PropTypes.string,
  getAllCompanies: PropTypes.func.isRequired
}

export default IndexPage;
