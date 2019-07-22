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
    let shortdesc;
    let longdesc;
    let location;
    let founded;
    let founders;
    if (!ev.target[0].value) {
      name = business.name;
    } else {
      name = ev.target[0].value;
    }

    if (!ev.target[1].value) {
      shortdesc = business.shortdesc;
    } else {
      shortdesc = ev.target[1].value;
    }

    if (!ev.target[2].value) {
      longdesc = business.longdesc;
    } else {
      longdesc = ev.target[2].value;
    }

    if (!ev.target[3].value) {
      location = business.location;
    } else {
      location =
        ev.target[3].value.charAt(0).toUpperCase() +
        ev.target[3].value.slice(1);
    }

    if (!ev.target[4].value) {
      founded = business.founded;
    } else {
      founded = ev.target[4].value;
    }

    if (!ev.target[5].value) {
      founders = business.founders;
    } else {
      founders = ev.target[5].value;
    }

    let editBody = {
      name,
      shortdesc,
      longdesc,
      founders,
      location,
      founded
    };
    return editSubmitCallback(editBody, id);
  };

  return (
    <div className='singleView'>
      <form onSubmit={editSubmit}>
        <input placeholder={business.name} />
        <input placeholder={business.shortdesc} />
        <textarea placeholder={business.longdesc} />
        <input placeholder={business.location} />
        <input maxLength='4' placeholder={business.founded} />
        <input placeholder={business.founders} />
        <button style={{ marginLeft: '75%', width: '20%' }} type='submit'>
          Edit Entry
        </button>
      </form>
      <button onClick={() => cancelEditCallback()}>Cancel Edit</button>
    </div>
  );
};

export default BusinessEdit;
