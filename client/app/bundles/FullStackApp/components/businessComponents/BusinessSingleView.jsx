import React from 'react';

const BusinessSingleView = ({ business, closeViewCallback }) => {
  return (
    <div className='singleView'>
      <div>
        <h3>Name: {business.name}</h3>
      </div>
      <br />
      <div>
        <i>Description: {business.longdesc}</i>
      </div>
      <br />
      <div>Location: {business.location}</div>
      <div>
        <br />
        <em>Year: {business.founded}</em>
      </div>
      <br />
      <div>Founders: {business.founders}</div>
      <br />
      <button onClick={() => closeViewCallback()}>Close</button>
    </div>
  );
};

export default BusinessSingleView;
