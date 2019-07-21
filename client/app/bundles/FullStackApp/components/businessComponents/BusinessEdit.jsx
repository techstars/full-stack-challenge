import React from 'react';

const BusinessEdit = ({
  business,
  editSubmitCallback,
  id,
  cancelEditCallback
}) => {
  const editSubmit = ev => {
    ev.preventDefault();
    let name;
    let description;
    let location;
    let founded;
    if (!ev.target[0].value) {
      name = business.name;
    } else {
      name = ev.target[0].value;
    }

    if (!ev.target[1].value) {
      description = business.description;
    } else {
      description = ev.target[1].value;
    }

    if (!ev.target[2].value) {
      location = business.location;
    } else {
      location =
        ev.target[2].value.charAt(0).toUpperCase() +
        ev.target[2].value.slice(1);
    }

    if (!ev.target[3].value) {
      founded = business.founded;
    } else {
      founded = ev.target[3].value;
    }

    let editBody = {
      name,
      description,
      location,
      founded
    };
    return editSubmitCallback(editBody, id);
  };

  return (
    <div className='createForm'>
      <form onSubmit={editSubmit}>
        <input placeholder={business.name} />
        <input placeholder={business.description} />
        <input placeholder={business.location} />
        <input maxLength='4' placeholder={business.founded} />
        <button type='submit'>Edit Entry</button>
      </form>
      <button onClick={() => cancelEditCallback()}>Cancel Edit</button>
    </div>
  );
};

export default BusinessEdit;
