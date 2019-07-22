import React from 'react';

const AddBusiness = ({ createCallback, cancelEditCallback }) => {
  const create = ev => {
    ev.preventDefault();
    let name;
    let shortdesc;
    let longdesc;
    let location;
    let founded;
    let founders;
    if (!ev.target[0].value) {
      alert('please provide a name');
    } else {
      name = ev.target[0].value;
    }

    if (!ev.target[1].value) {
      alert('please provide a short description');
    } else {
      shortdesc = ev.target[1].value;
    }

    if (!ev.target[2].value) {
      alert('please provide a long description');
    } else {
      longdesc = ev.target[2].value;
    }

    if (!ev.target[3].value) {
      alert('please provide a location in format City, State e.g. Boulder, CO');
    } else {
      location =
        ev.target[3].value.charAt(0).toUpperCase() +
        ev.target[3].value.slice(1);
    }

    if (!ev.target[4].value) {
      alert('please provide a year founded');
    } else {
      founded = ev.target[4].value;
    }

    if (!ev.target[5].value) {
      alert('please provide a year founded');
    } else {
      founders = ev.target[5].value;
    }

    let postBody = {
      name,
      shortdesc,
      longdesc,
      location,
      founded,
      founders
    };
    return createCallback(postBody);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Business Create Form</h2>
      <div className='singleView'>
        <form onSubmit={create}>
          <br />
          <br />
          <input type='text' placeholder='Business Name' required />
          <br />
          <input type='text' placeholder='Short Description' required />
          <br />
          <textarea placeholder='Long Description' required />
          <br />
          <input
            type='text'
            placeholder='Location "City, State (Lewes, DE)'
            required
          />
          <br />
          <input maxLength='4' placeholder='Year Founded' required />
          <br />
          <input
            type='text'
            placeholder='Founders (Formate: Name, Name)'
            required
          />
          <br />
          <button style={{ marginLeft: '75%', width: '20%' }} type='submit'>
            Create
          </button>
        </form>
        <button onClick={() => cancelEditCallback()}>Cancel</button>
      </div>
    </div>
  );
};

export default AddBusiness;
