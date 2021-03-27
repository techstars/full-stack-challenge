import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../../apis';
import CompanyCreate from '../CompanyCreate';
import Modal from 'react-modal';
import './index.css';

const CompanyView = ({match}) => {
  const api = new Api();
  const history = useHistory();
  const [modalIsOpen, setModalOpen] = useState(false);
  const [company, setCompany] = useState();
  const { id } = match.params;

  Modal.setAppElement('#root');

  const _init = () => {
    api.getCompanyById(id).then((company) => {
      setCompany(company[0]);
    });
  }

  useEffect(() => {
    _init();
  }, [id]);

  const redirect = (path) => {
    history.push(path);
  }

  const onDelete = async () => {
    await api.deleteCompanyById(id);
    redirect('/dashboard');
  }

  const onClose = () => {
    setModalOpen(false);
    _init();
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
        style={{
          content: {
            height: '50%',
            width: '70%',
            position: 'absolute',
            margin: 'auto'
          }
        }}
      >
        <CompanyCreate update={true} formModelData={company} onClose={onClose}/>
      </Modal>
      {company && (<div className="company-container">
        <div className="company-heading">{company.name}</div>
        <div className="company-info-container">
          <div>{company.founded.split('T')[0]}</div>
          <div>{company.city}, {company.state}</div>
          <div>|</div> 
          <div className="op-button" onClick={() => setModalOpen(true)}>Edit</div>
          <div className="op-button" onClick={onDelete}>Delete</div>
        </div>
        <div>{company.description}</div>
      </div>)}
    </>
  );
}

export default CompanyView;