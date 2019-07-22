import React from 'react';

const AddFounder = ({ founders, founderCallback }) => {
  const addFounder = ev => {
    let founder;
    ev.preventDefault();
    if (!ev.target[0].value) {
      alert('Add a founder!');
    } else {
      founder = ev.target[0].value;
    }
    return founderCallback(founder);
  };

  return (
    <form>
      <input placeholder='Founder' />
      <button onClick={addFounder}>Add Founder</button>
    </form>
  );
};

export default AddFounder;
