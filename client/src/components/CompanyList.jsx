import React from 'react';
import Company from './Company';
import CompanyDetail from './CompanyDetail'

const CompanyList = ({ buttonHandler, companies, setActive, activeCompany }) => {
  return (
    <div>

      {companies.map((data, index) => {
          return <Company data={data} index={index} setActive={setActive}/>
      })}

      <div className="btn-wrapper">
        <button className="add-btn" onClick={buttonHandler}>Add Company</button>
      </div>

    </div>
  )
}

export default CompanyList;