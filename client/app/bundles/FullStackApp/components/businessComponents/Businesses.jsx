import React from 'react';
import BusinessesList from './BusinessesList';

const Businesses = ({ businesses, viewItemCallback }) => {
  if (businesses.length === 0) {
    return <div>Loading...✨</div>;
  } else {
    return (
      <span>
        {businesses.map((business, y) => (
          <BusinessesList
            id={y}
            key={y}
            item={business}
            viewItemCallback={viewItemCallback}
          />
        ))}
      </span>
    );
  }
};

export default Businesses;
