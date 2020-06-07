import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CompanyDetailsCard from 'components/CompanyDetailsCard';
import CompanyEdit from 'components/CompanyEdit';

const CompanyPage = props => {
  const {
    theme,
    getOneCompany,
    updateCompany,
    match: { params: { id } }
  } = props;
  
  const [company, setCompany] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const loadCompany = async () => {
      const response = await getOneCompany(id);
      setCompany(response);
    }
    loadCompany();
  }, [getOneCompany, id]);

  const handleUpdateCompany = async data => {
    const response = await updateCompany(id, data);
    if (!response.error) {
      setCompany(response);
      setIsEditing(false);
      return response;
    }
  }

  const handleCancel = () => {
    setIsEditing(false);
  }

  return (
    <div className='container'>
      <div className='row'>
        {isEditing ?
        <CompanyEdit theme={theme} company={company} handleCancel={handleCancel} handleUpdateCompany={handleUpdateCompany}/>
        : <CompanyDetailsCard theme={theme} company={company} toggleEdit={setIsEditing}/>}
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
