import React from 'react';

const BusinessSingleView = ({ business, closeViewCallback }) => {
  return (
    <div className='createForm'>
      <div>{business.name}</div>
      <div>{business.longdesc}</div>
      <div>{business.location}</div>
      <div>{business.founded}</div>
      <div>{business.founders}</div>
      <button onClick={() => closeViewCallback()}>Close</button>
    </div>
  );
};

export default BusinessSingleView;
