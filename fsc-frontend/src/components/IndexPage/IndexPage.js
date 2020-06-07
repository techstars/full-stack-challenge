import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IndexCard from 'components/IndexCard';

const IndexPage = props => {
  const { getAllCompanies, theme } = props;

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
      <div className='container'>
        <div className='row'>
          { companies && companies.map((company, i) => <IndexCard key={i} company={company} theme={theme}/>) }
        </div>
      </div>
    </div>
  )
}

IndexPage.propTypes = {
  theme: PropTypes.string,
  getAllCompanies: PropTypes.func.isRequired
}

export default IndexPage;
