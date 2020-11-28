import React, { useState } from 'react';
import FounderForm from './FounderForm';

const Founders = ({ founders }) => {
  const [adding, updateAdding] = useState(false);

  const submitHandler = (name, title) => {
    // api request
    console.log(name, title);
    hideForm();
  }

  const hideForm = () => {
    updateAdding(false);
  }

  return (
    <div className="founders-wrapper">

      <div className="founders-list-wrapper">
        {founders.map((founder) => {
          return (
            <div className="founders-list-item">
              <p>{`${founder.name}:  ${founder.title}`}</p>
            </div>
          )
        })}
      </div>

      <div className="founder-btn-wrapper">
        {/* if add founder is clicked, display form */}
        {adding ? <FounderForm hide={hideForm} submit={submitHandler} /> : <button onClick={() => updateAdding(true)}>Add Founder</button>}
      </div>

    </div>
  )
}

export default Founders;