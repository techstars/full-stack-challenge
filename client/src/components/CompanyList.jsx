import React from 'react';
import Company from './Company';

const CompanyList = ({ companies }) => {
  return (
    <div>
      Company List
      {companies.map((data) => {
        return <Company data={data} />
      })}
    </div>
  )
}

export default CompanyList;