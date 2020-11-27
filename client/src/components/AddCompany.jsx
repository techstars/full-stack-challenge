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
      const missingRequired = []
      if (!formData[field]) {
        switch(field) {
          case 'name':
            updateName(undefined);
            break;
          case 'city':
            updateCity(undefined);
            break;
          case 'state':
            updateState(undefined);
            break;
          case 'description':
            updateDescription(undefined);
            break;
        }
      }
    }

    // API put request will go here
  }

  return (
    <div>

      <form>
        <fieldset className="add-company-wrapper">

          <legend className="form-legend-text">Create A New Company</legend>

          <div className="form-line-one">
            <label>
              Company Name:
              <input
                type="text"
                name="name"
                className="form-input line-one-input"
                onChange={e=> updateName(e.target.value)}
              />
             {name === undefined ? <span className="form-error-text">*Company Name Required</span> : ''}
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
              {city === undefined ? <span className="form-error-text">*City Required</span> : ''}
            </label><br/>

            <label className="line-two-label">
              State: <br/>
              <input
                type="text"
                name="state"
                className="form-input line-two-input"
                onChange={e=> updateState(e.target.value)}
              />
              {state === undefined ? <span className="form-error-text">*State Required</span> : ''}
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
              {description === undefined ? <span className="form-error-text">*Company Description Required</span> : ''}
            </label>
          </div>

          <div className="btn-wrapper">
            <button className="save-btn" onClick={e => handleFormSubmit(e)}>Save</button>
          </div>

        </fieldset>

      </form>

    </div>
  )
}

export default AddCompany;