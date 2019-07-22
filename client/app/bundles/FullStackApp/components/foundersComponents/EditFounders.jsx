import React from 'react';
import AddFounder from './AddFounder';

const EditFounders = ({ founders, addFounderCallback, businessid }) => {
  let arr = [];
  let hidden = false;
  for (let i = 0; i < founders.length; i++) {
    if (founders[i].businessid === businessid) {
      arr.push(founders[i]);
    }
  }

  const del = async (founder, arr) => {
    console.log(founder.name);
    alert(`Founder: ${founder.name} deleted!`);
    let response = await fetch(`/founders/${founder.id}.json`, {
      method: 'DELETE'
    });
    console.log('del founder resp:', response);
    return arr;
  };

  return (
    <span>
      {arr.map((founder, i) => (
        <div key={i}>
          <span>
            <div>{founder.name}</div>
            <button onClick={() => del(founder)}>remove</button>
          </span>
        </div>
      ))}
      <AddFounder addFounderCallback={addFounderCallback} />
    </span>
  );
};

export default EditFounders;
