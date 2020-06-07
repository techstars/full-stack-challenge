import React, { useState } from 'react';
import PropTypes from 'prop-types';
import states from 'util/states';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CompanyEdit = props => {
  const { company, handleUpdateCompany, theme, handleCancel } = props;

  const [name, setName] = useState(company.name);
  const [description, setDescription] = useState(company.description);
  const [city, setCity] = useState(company.city);
  const [state, setState] = useState(company.state);
  const [foundedDate, setFoundedDate] = useState(company.foundedDate);

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

  const updateCompany = async e => {
    e.preventDefault();
    const data = {
      name,
      description,
      city,
      state,
      foundedDate
    }
    handleUpdateCompany(data);
  }

  return (
    <div className='col-12'>
      <div className='card'>
        <div className='card-body fsc-body-text'>
          <h3 className='fsc-header-text'>Edit Company</h3>
          <hr />
          <div className='container'>

          <form>
            <div className='row text-left'>
              <div className='col'><h6 className='fsc-header-text'>Name</h6></div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
                <input className='form-control' id='name' value={name} onChange={handleEdit} required/>
              </div>
            </div>

            <div className='row text-left'>
              <div className='col'><h6 className='fsc-header-text'>Location</h6></div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
                <input className='form-control' id='city' value={city} onChange={handleEdit} required/>
              </div>
              <div className='col'>
                <select className='form-control' value={state} id='state' onChange={handleEdit} required>
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
                <textarea className='form-control' value={description} id='description' onChange={handleEdit} required/>
              </div>
            </div>

            <div className='row fsc-nav-text'>
              <div className='col text-right'>
                <button
                  type='submit'
                  className={`btn btn-${theme}`}
                  onClick={updateCompany}>
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
  )
}

CompanyEdit.propTypes = {
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

export default CompanyEdit;
