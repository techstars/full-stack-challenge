import React from 'react';

const Founders = ({ businessid, founders }) => {
  let arr = [];
  for (let i = 0; i < founders.length; i++) {
    if (founders[i].businessid === businessid) {
      arr.push(founders[i].name);
    }
  }
  return (
    <span>
      Founders:
      {arr.map((founder, i) => (
        <div key={i}>{founder}</div>
      ))}
    </span>
  );
};

export default Founders;
