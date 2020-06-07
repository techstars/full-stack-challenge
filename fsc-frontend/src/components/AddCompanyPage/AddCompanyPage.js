import React from 'react';
import PropTypes from 'prop-types';
import AddCompanyCard from 'components/AddCompanyCard';

const AddCompanyPage = props => {
  const { addCompany, history, theme } = props;

  const handleSubmit = async data => {
    const response = await addCompany(data);
    if (!response.error) {
      history.push('/');
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <AddCompanyCard theme={theme} handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
}

AddCompanyPage.propTypes = {
  theme: PropTypes.string,
  addCompany: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

AddCompanyPage.defaultProps = {
  theme: 'light'
}

export default AddCompanyPage;
