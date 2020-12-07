import React, { useState } from 'react';
import Company from './Company';
import CompanyDetail from './CompanyDetail';
import SearchBar from './SearchBar';

const CompanyList = ({ buttonHandler, companies, setActive, activeCompany }) => {
  const [searchInput, updateSearchInput] = useState('');
  const [activeSearchTerm, updateActiveSearchTerm] = useState('');

  const searchHandler = () => {
    updateActiveSearchTerm(searchInput.toLowerCase());
  }

  return (
    <div>

      <SearchBar updateInput={updateSearchInput} searchHandler={searchHandler} />

      {companies.filter((data) => {
        let companyName = data.name.toLowerCase();
        return companyName.includes(activeSearchTerm);
      }).map((data, index) => {
          return <Company key={data.name} data={data} index={index} setActive={setActive}/>
      })}

      {/* {companies.map((data, index) => {
          let companyName = data.name.toLowerCase();
          if (companyName.includes(activeSearchTerm)) {
            return <Company key={data.name} data={data} index={index} setActive={setActive}/>
          } else {
            return '';
          }
      })} */}



      <div className="btn-wrapper">
        <button className="add-btn" onClick={buttonHandler}>Add Company</button>
      </div>

    </div>
  )
}

export default CompanyList;