import React, { useState } from 'react';

const AddCompany = () => {
  const[name, updateName] = useState('');
  const[city, updateCity] = useState('');
  const[state, updateState] = useState('');
  const[founded, updateFounded] = useState('');
  const[description, updateDescription] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const formData = {
      name,
      city,
      state,
      founded,
      description,
    }

    // check if any fields are empty
    for (const field in formData) {
      if (!formData[field]) {
        alert('Please complete form before submitting')
        return
      }
    }

    // API put request will go here
  }

  return (
    <div className="add-company-wrapper">

      <form>

        <div className="form-line-one">
          <label>
            Name: <br/>
            <input
              type="text"
              name="name"
              className="form-input line-one-input"
              onChange={e=> updateName(e.target.value)}
            />
          </label>
        </div>

        <div className="form-line-two">
          <label className="line-two-label">
            City: <br/>
            <input
              type="text"
              name="city"
              className="form-input line-two-input"
              onChange={e=> updateCity(e.target.value)}
            />
          </label><br/>

          <label className="line-two-label">
            State: <br/>
            <input
              type="text"
              name="state"
              className="form-input line-two-input"
              onChange={e=> updateState(e.target.value)}
            />
          </label><br/>

          <label className="line-two-label">
            Founded Date: <br/>
            <input
              type="date"
              name="founded-date"
              className="form-input line-two-input"
              onChange={e=> updateFounded(e.target.value)}
            />
          </label>
        </div>

        <div className="form-line-three">
          <label>
            Description: <br/>
            <textarea
              name="description"
              className=" form-input line-three-input"
              onChange={e=> updateDescription(e.target.value)}
            />
          </label>
        </div>

        <button className="save-btn" onClick={e => handleFormSubmit(e)}>Save</button>

      </form>

    </div>
  )
}

export default AddCompany;