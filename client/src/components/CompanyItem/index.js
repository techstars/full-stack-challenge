import React from 'react';

const CompanyItem = ({name, location, description, onClick}) => {

  const clickableFunc = () => {
    onClick && onClick();
  }

  return (
    <div onClick={clickableFunc}>Company item {name} {location} {description}</div>
  )
}

export default CompanyItem;