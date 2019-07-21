import React from 'react';

const AddBusiness = ({ createCallback, cancelEditCallback }) => {
  const create = ev => {
    ev.preventDefault();
    let name;
    let description;
    let location;
    let founded;
    if (!ev.target[0].value) {
      alert('please provide a name');
    } else {
      name = ev.target[0].value;
    }

    if (!ev.target[1].value) {
      alert('please provide a description');
    } else {
      description = ev.target[1].value;
    }

    if (!ev.target[2].value) {
      alert('please provide a location in format City, State e.g. Boulder, CO');
    } else {
      location =
        ev.target[2].value.charAt(0).toUpperCase() +
        ev.target[2].value.slice(1);
    }

    if (!ev.target[3].value) {
      alert('please provide a year founded');
    } else {
      founded = ev.target[3].value;
    }

    let postBody = {
      name,
      description,
      location,
      founded
    };
    return createCallback(postBody);
  };

  return (
    <div className='createForm'>
      <form onSubmit={create}>
        Create A New Business
        <br />
        <input type='text' placeholder='Business Name' required />
        <br />
        <input type='text' placeholder='Description' required />
        <br />
        <input
          type='text'
          placeholder='Location "City, State (Lewes, DE)'
          required
        />
        <br />
        <input maxLength='4' placeholder='Year Founded' required />
        <br />
        <button type='submit'>Create</button>
      </form>
      <button onClick={() => cancelEditCallback()}>Cancel</button>
    </div>
  );
};

export default AddBusiness;
