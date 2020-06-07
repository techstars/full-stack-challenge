import React, { useState } from 'react';
import PropTypes from 'prop-types';
import states from 'util/states';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddCompanyCard = props => {
  const { handleSubmit, theme } = props;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [foundedDate, setFoundedDate] = useState(new Date(Date.now()));

  const nameToFunction = {
    name: setName,
    description: setDescription,
    city: setCity,
    state: setState,
    foundedDate: setFoundedDate
  }

  const handleEdit = e => {
    nameToFunction[e.target.id](e.target.value)
  }

  const handleDateChange = day => {
    setFoundedDate(day);
  }

  const addCompany = async e => {
    e.preventDefault();
    const data = {
      name,
      description,
      city,
      state,
      foundedDate
    }
    handleSubmit(data);
  }

  return (
    <div className='col-12'>
      <div className={`card fsc-card-${theme}`}>
        <div className={`card-body fsc-body-text fsc-card-${theme}`}>
          <h3 className='fsc-header-text'>Add Company</h3>
          <hr />
          <div className='container'>

          <form onSubmit={addCompany}>
            <div className='row text-left'>
              <div className='col'><h6 className='fsc-header-text'>Name</h6></div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
                <input className={`form-control fsc-input-${theme}`} id='name' value={name} onChange={handleEdit} required type='text'/>
              </div>
            </div>

            <div className='row text-left'>
              <div className='col'><h6 className='fsc-header-text'>Location</h6></div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
                <input className={`form-control fsc-input-${theme}`} id='city' value={city} onChange={handleEdit} required/>
              </div>
              <div className='col'>
                <select className={`form-control fsc-input-${theme}`} value={state} id='state' onChange={handleEdit} required>
                  {states.map((state, i) => <option key={i}>{state}</option>)}
                </select>
              </div>             
            </div>

            <div className='row text-left'>
              <div className='col'><h6 className='fsc-header-text'>Date Founded</h6></div>
            </div>
            <div className='row mb-3'>
              <div className='col text-left'>
                <DatePicker
                  selected={new Date(foundedDate)}
                  onChange={handleDateChange}
                />
              </div>
            </div>

            <div className='row text-left'>
              <div className='col'><h6 className='fsc-header-text'>Description</h6></div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
                <textarea className={`form-control fsc-input-${theme}`} value={description} id='description' onChange={handleEdit} required/>
              </div>
            </div>

            <div className='row fsc-nav-text'>
              <div className='col'>
                <button
                  type='submit'
                  className={`btn btn-${theme}`}>
                  Submit
                </button>
              </div>
            </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

AddCompanyCard.propTypes = {
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

export default AddCompanyCard;
