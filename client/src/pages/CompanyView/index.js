import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../../apis';
import CompanyCreate from '../../components/CompanyCreate';
import Founders from '../../components/Founders';
import FounderCreate from '../../components/FounderCreate';
import Modal from 'react-modal';
import './index.css';

const CompanyView = ({match}) => {
  const api = new Api();
  const history = useHistory();
  const [modalIsOpen, setModalOpen] = useState(false);
  const modalTypes = {
    edit: 'EDIT',
    founder: 'FOUNDER'
  }
  const [modalType, setModalType] = useState(modalTypes.edit);
  const [data, setData] = useState();
  const { id } = match.params;

  Modal.setAppElement('#root');

  const _init = () => {
    api.getCompanyAndFoundersByCompanyId(id).then((data) => {
      console.log(data);
      setData(data);
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

  const setModalOpenEdit = () => {
    setModalType(modalTypes.edit);
    setModalOpen(true);
  }

  const setModalOpenFounder = () => {
    setModalType(modalTypes.founder);
    setModalOpen(true);
  }

  const ModalType = ({type}) => {
    switch(type) {
      case modalTypes.edit: {
        return <CompanyCreate update={true} formModelData={data && data.company} onClose={onClose}/>
      };
      case modalTypes.founder: {
        return <FounderCreate onClose={onClose} companyId={data && data.company.id}/>
      }
      default: {
        return null;
      }
    }
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
        <ModalType type={modalType}/>
      </Modal>
      {data && (<div className="main-container">
        <div className="company-container">
        <div className="company-heading">{data.company.name}</div>
        <div className="company-info-container">
          <div>{data.company.founded && data.company.founded.split('T')[0]}</div>
          <div>{data.company.city}, {data.company.state}</div>
          <div>|</div> 
          <div className="op-button" onClick={setModalOpenEdit}>Edit</div>
          <div className="op-button" onClick={onDelete}>Delete</div>
        </div>
        <div>{data.company.description}</div>
      </div>
        <Founders founders={data.founders} onClick={setModalOpenFounder} companyId={data.company.id}/>
      </div>)}
    </>
  );
}

export default CompanyView;