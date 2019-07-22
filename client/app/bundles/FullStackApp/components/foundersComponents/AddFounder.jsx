import React from 'react';

const AddFounder = ({ addFounderCallback }) => {
  const add = ev => {
    ev.preventDefault();
    let arr = [];
    let name = '';
    if (!ev.target[0].value) {
      alert('Add name to founder input');
    } else {
    }
    arr = ev.target[0].value.split(' ');
    for (let i = 0; i < arr.length; i++) {
      name += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' ';
    }
    ev.target[0].value = '';
    return addFounderCallback(name);
  };
  return (
    <div className='founderForm'>
      <form onSubmit={add}>
        <input placeholder='founder full name' />
        <button>Add Founder</button>
      </form>
    </div>
  );
};

export default AddFounder;
