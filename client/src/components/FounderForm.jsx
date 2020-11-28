import React, { useState } from 'react';

const FounderForm = ({ hide, submit}) => {
  const [name, updateName] = useState('');
  const [title, updateTitle] = useState('');

  const validateForm = (e) => {
    e.preventDefault();
    if (name && title) {
      submit(name, title);
      return;
    }
    if (!name) {
      updateName(undefined);
    }
    if (!title) {
      updateTitle(undefined);
    }
  }

  return(
    <form className="founder-form">

      <div className="founder-form-item">
        <label >
          Name:<br/>
          <input type="text" onChange={e => updateName(e.target.value)}></input>
        </label>
        {name === undefined ? <p className="form-error-text">*Name Required</p> : ''}
      </div>

      <div className="founder-form-item">
        <label >
          Title:<br/>
          <input type="text" onChange={e => updateTitle(e.target.value)}></input>
        </label>
        {title === undefined ? <p className="form-error-text">*Title Required</p> : ''}
      </div>

      <div className="founder-btn-wrapper">
        <button className="founder-form-btn" onClick={e => validateForm(e)}>Submit</button>
        <button className="founder-form-btn" onClick={hide}>Cancel</button>
      </div>

    </form>
  )
}

export default FounderForm;