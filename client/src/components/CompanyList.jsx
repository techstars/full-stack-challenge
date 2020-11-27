import React from 'react';
import Company from './Company';

const CompanyList = ({ buttonHandler, companies }) => {
  return (
    <div>

      {companies.map((data) => {
        return <Company data={data} />
      })}

      <div className="btn-wrapper">
        <button className="add-btn" onClick={buttonHandler}>Add Company</button>
      </div>

    </div>
  )
}

export default CompanyList;