import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CompanyDetailsCard from 'components/CompanyDetailsCard';

const CompanyPage = props => {
  const {
    theme,
    getOneCompany,
    match: { params: { id } }
  } = props;
  
  const [company, setCompany] = useState({});
  useEffect(() => {
    const loadCompany = async () => {
      const response = await getOneCompany(id);
      setCompany(response);
    }
    loadCompany();
  }, [getOneCompany, id])

  return (
    <div className='container'>
      <div className='row'>
        <CompanyDetailsCard theme={theme} company={company}/>
      </div>
    </div>
  )
}

CompanyPage.propTypes = {
  theme: PropTypes.string,
  getOneCompany: PropTypes.func.isRequired
}

CompanyPage.defaultProps = {
  theme: 'light'
}

export default CompanyPage;
