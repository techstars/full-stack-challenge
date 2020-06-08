import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddFounderCard = props => {

  const {
    theme,
    handleCancel,
    handleAddFounder,
    companyId
  } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');

  const nameToFunction = {
    firstName: setFirstName,
    lastName: setLastName,
    title: setTitle
  }

  const handleChange = e => {
    nameToFunction[e.target.id](e.target.value)
  }

  const addFounder = e => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      title,
      companyId
    }
    handleAddFounder(data);
  }

  return (
    <div className='row my-3'>
      <div className='col-12'>
        <div className={`card fsc-card-${theme}`}>
          <div className={`card-body fsc-body-text fsc-card-${theme}`}>
            <div className='container'>

              <form onSubmit={addFounder}>

              <div className='row'>
                <div className='col'><h6 className='fsc-header-text'>First Name</h6></div>
              </div>
              <div className='row mb-3'>
                <div className='col'>
                  <input className={`form-control fsc-input-${theme}`} id='firstName' value={firstName} onChange={handleChange} required />
                </div>
              </div>

              <div className='row'>
                <div className='col'><h6 className='fsc-header-text'>Last Name</h6></div>
              </div>
              <div className='row mb-3'>
                <div className='col'>
                  <input className={`form-control fsc-input-${theme}`} id='lastName' value={lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className='row'>
                <div className='col'><h6 className='fsc-header-text'>Title</h6></div>
              </div>
              <div className='row mb-3'>
                <div className='col'>
                  <input className={`form-control fsc-input-${theme}`} id='title' value={title} onChange={handleChange} required />
                </div>
              </div>

              <div className='row fsc-nav-text'>
                <div className='col text-right'>
                  <button
                    type='submit'
                    className={`btn btn-${theme}`}>
                    Submit
                  </button>
                </div>
                <div className='col text-left'>
                  <button
                    className={`btn btn-danger`}
                    onClick={() => handleCancel()}>
                    Cancel
                  </button>
                </div>
              </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AddFounderCard.propTypes = {
  theme: PropTypes.string.isRequired,
  handleAddFounder: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  companyId: PropTypes.number.isRequired
}

export default AddFounderCard;
