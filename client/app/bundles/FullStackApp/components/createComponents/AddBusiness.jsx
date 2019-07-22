import React from 'react';
import AddFounder from '../foundersComponents/AddFounder';

const AddBusiness = ({
  createCallback,
  cancelEditCallback,
  addFounderCallback
}) => {
  const create = ev => {
    ev.preventDefault();
    let name;
    let shortdesc;
    let longdesc;
    let location;
    let founded;
    let city;
    let state;
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
      city =
        ev.target[3].value.charAt(0).toUpperCase() +
        ev.target[3].value.slice(1);
    }

    if (!ev.target[4].value) {
      alert('please provide a location in format City, State e.g. Boulder, CO');
    } else {
      state = ev.target[4].value.toUpperCase();
    }

    if (!ev.target[5].value) {
      alert('please provide a year founded');
    } else {
      founded = ev.target[5].value.toString();
    }

    let postBody = {
      name,
      shortdesc,
      longdesc,
      location: `${city}, ${state}`,
      founded
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
          <label>Business</label>
          <input />
          <label>Tagline</label>
          <input />
          <label>Description</label>
          <textarea />
          <label>
            City
            <input />
          </label>
          <label>
            State
            <input maxLength='2' width='2' />
          </label>
          <label>Founded</label>

          <input type='date' />
          <br />
          <button style={{ marginLeft: '75%', width: '20%' }} type='submit'>
            Create
          </button>
        </form>
        <button onClick={() => cancelEditCallback()}>Cancel</button>
      </div>
      <AddFounder addFounderCallback={addFounderCallback} />
    </div>
  );
};

export default AddBusiness;
