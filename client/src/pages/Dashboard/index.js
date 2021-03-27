import React, { useEffect, useState } from 'react';
import Api from '../../apis';
import CompanyItem from '../../components/CompanyItem';
import CompanySelector from '../../components/CompanySelector';
import CompanyCreate from '../../components/CompanyCreate';
import Modal from 'react-modal';
import './index.css';

const Dashboard = () => {
  const api = new Api();
  const [companies, setCompanies] = useState([]);
  const [modalIsOpen, setModalOpen] = useState(false);
  
  const _init = () => (async () => {
    const companies = await api.getAllCompanies();
    setCompanies(companies);
  })();

  useEffect(() => {
    _init();
  }, []);

  Modal.setAppElement('#root');

  const onClose = () => {
    setModalOpen(false);
    _init();
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalOpen(false)}
        style={{
          content: {
            height: '50%',
            width: '70%',
            position: 'absolute',
            margin: 'auto'
          }
        }}
      >
        <CompanyCreate onClose={onClose}/>
      </Modal>
      <CompanySelector>
        {companies && companies.map(data => {
          return <CompanyItem 
            name={data.name}
            location={`${data.city}, ${data.state}`}
            description={data.description}
            id={data.id}
          />
        })}
      </CompanySelector>
      <div className="add-button" onClick={() => setModalOpen(true)}>
        Add Company
      </div>
    </>
  );
}

export default Dashboard;