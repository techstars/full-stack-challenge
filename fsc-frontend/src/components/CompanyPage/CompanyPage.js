import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CompanyDetailsCard from 'components/CompanyDetailsCard';
import CompanyEdit from 'components/CompanyEdit';
import FounderCard from 'components/FounderCard';
import AddFounderCard from 'components/AddFounderCard';

const CompanyPage = props => {
  const {
    theme,
    getOneCompany,
    updateCompany,
    addFounder,
    deleteCompany,
    match: { params: { id } },
    history
  } = props;
  
  const [company, setCompany] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [showFounderFields, setShowFounderFields] = useState(false);

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
    setShowFounderFields(false);
  }

  const handleAddFounder = async data => {
    const response = await addFounder(data);
    if (!response.error) {
      const newCompany = company;
      newCompany.founders.push(response);
      setCompany(newCompany);
      setShowFounderFields(false);
      return response;
    }
  }

  const handleDelete = async () => {
    const response = await deleteCompany(id);
    if (!response.error) {
      history.push('/');
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        {isEditing ?
        <CompanyEdit theme={theme} company={company} handleCancel={handleCancel} handleUpdateCompany={handleUpdateCompany}/>
        : <CompanyDetailsCard theme={theme} company={company} toggleEdit={setIsEditing} handleDelete={handleDelete}/>}
      </div>

      <div className='row'>
        {company.founders && company.founders.map((founder, i) => <FounderCard key={i} theme={theme} founder={founder} />)}
      </div>

      { showFounderFields && <AddFounderCard theme={theme} companyId={company.id} handleCancel={handleCancel} handleAddFounder={handleAddFounder} /> }

      <div className='row'>
        <div className='col text-left my-4'>
          <button
            className={`fsc-nav-text btn btn-${theme}`}
            onClick={setShowFounderFields}>
              Add Founder
          </button>
        </div>

      </div>
    </div>
  )
}

CompanyPage.propTypes = {
  theme: PropTypes.string,
  getOneCompany: PropTypes.func.isRequired,
  updateCompany: PropTypes.func.isRequired,
  addFounder: PropTypes.func.isRequired,
  deleteCompany: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

CompanyPage.defaultProps = {
  theme: 'light'
}

export default CompanyPage;
