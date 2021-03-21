import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../../apis';
import CompanyItem from '../../components/CompanyItem';
import CompanySelector from '../../components/CompanySelector';
import './index.css';

const Dashboard = () => {
  const api = new Api();
  const history = useHistory();
  const [companies, setCompanies] = useState([]);

  const redirect = (path) => {
    history.push(path);
  };
  
  const _init = () => (async () => {
    const companies = await api.getAllCompanies();
    setCompanies(companies);
  })();

  useEffect(() => {
    _init();
  });

  return (
    <>
      <CompanySelector>
        {companies.map(data => {
          return <CompanyItem 
            name={data.name}
            location={data.location}
            description={data.description}
            id={data.id}
          />
        })}
      </CompanySelector>
      <div className="add-button" onClick={() => redirect('/company/add')}>
        Add Company
      </div>
    </>
  );
}

export default Dashboard;