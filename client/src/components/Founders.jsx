import React, { useState } from 'react';
import axios from 'axios';
import FounderForm from './FounderForm';

const Founders = ({ founders, add }) => {
  const [adding, updateAdding] = useState(false);

  const submitHandler = (name, title) => {
    const founderData = {
      name,
      title,
    }
    // api post request
    add(founderData);
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