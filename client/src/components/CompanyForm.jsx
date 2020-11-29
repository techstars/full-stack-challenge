import React, { useState , useEffect} from 'react';

// if company passed to form, it's being used to edit existing company, otherwise it's being used to create a new company
const AddCompany = ({ company, cancel, submit }) => {
  const[name, updateName] = useState('');
  const[city, updateCity] = useState('');
  const[state, updateState] = useState('');
  const[founded, updateFounded] = useState('');
  const[description, updateDescription] = useState('');
  const[founders, updateFounders] = useState('');

  // if editing company, autopopulate form fields
  useEffect(() => {
    // break if creating new company
    if (!company) {
      return;
    }
    updateName(company.name);
    updateCity(company.city);
    updateState(company.state);
    updateFounded(company.founded);
    updateDescription(company.description);
  }, [])

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
    let formComplete = true;
    for (const field in formData) {
      const missingRequired = []
      if (!formData[field]) {
        formComplete = false;
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

    if (formComplete) {
      // submit api request
      submit(formData);
      // escape from form
      cancel();
    }

  }

  return (
    <div className="company-form">

      <form>
        <fieldset className="add-company-wrapper">

          {/* display text based on form usage */}
          <legend className="form-legend-text">{company ? 'Edit Company' : 'Create A New Company'}</legend>

          <div className="form-line-one">
            <label>
              Company Name:
              <input
                type="text"
                name="name"
                className="form-input line-one-input"
                onChange={e=> updateName(e.target.value)}
                value={name}
              />
             {name === undefined ? <p className="form-error-text">*Company Name Required</p> : ''}
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
                value={city}
              />
              {city === undefined ? <p className="form-error-text">*City Required</p> : ''}
            </label><br/>

            <label className="line-two-label">
              State: <br/>
              <input
                type="text"
                name="state"
                className="form-input line-two-input"
                onChange={e=> updateState(e.target.value)}
                value={state}
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
                value={founded}
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
                value={description}
              />
              {description === undefined ? <span className="form-error-text">*Company Description Required</span> : ''}
            </label>
          </div>

          <div className="btn-wrapper">
          {/* used to discard changes for both adding and editing
          cancel prop can be two different functions but both remove the company form */}
            <button className="save-btn" onClick={cancel}>Discard Changes</button>
            <button className="save-btn" onClick={e => handleFormSubmit(e)}>Save</button>
          </div>

        </fieldset>

      </form>

    </div>
  )
}

export default AddCompany;