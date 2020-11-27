import React from 'react';

const Company = ({ data }) => {
  return (
    <div className="company-wrapper">
      <div className="company-header">
        <span className="company-name">{data.name}</span>
        <span className="company-location">{`${data.city}, ${data.state}`}</span>
        <a className="more-link">more...</a>
      </div>
      {/* Only display first 250 characters, display all when link to 'more' is clicked */}
      <p className ="company-description">{data.description.substr(0,250) + '...'}</p>
    </div>
  )
}

export default Company;