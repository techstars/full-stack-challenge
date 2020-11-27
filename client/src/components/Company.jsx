import React from 'react';

const Company = ({ data }) => {
  return (
    <div className="company-wrapper">
      <div className="company-header">
        <h4 className="company-name">{data.name}</h4>
        <h5 className="company-location">{`${data.city}, ${data.state}`}</h5>
      </div>
      <p className ="company-description">{data.description}</p>
    </div>
  )
}

export default Company;