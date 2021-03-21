import React from 'react';
import './index.css';

const CompanyItem = ({name, location, description, onClick}) => {

  const clickableFunc = () => {
    onClick && onClick();
  }

  return (
    <div className="company-item-container" onClick={clickableFunc}>
      <div className="company-item-row">
        <span className="company-item-name">{name}</span>
        <span className="company-item-divider" />
        <span>{location}</span>
      </div>
      <div className="company-item-row">
        {description}
      </div>
    </div>
  )
}

export default CompanyItem;