import React, { useEffect, useState } from 'react';
import Api from '../../apis';
import CompanyItem from '../../components/CompanyItem';
import CompanySelector from '../../components/CompanySelector';
import './index.css';

const Dashboard = () => {
  const api = new Api();
  const [companies, setCompanies] = useState([]);
  
  const _init = () => (async () => {
    const companies = await api.getAllCompanies();
    setCompanies(companies);
  })();

  useEffect(() => {
    _init();
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default Dashboard;