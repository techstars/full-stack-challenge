import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompanyForm from './CompanyForm';
import Founders from './Founders';

const CompanyDetail = ({ company, goBack, updateCompanies, updateActive }) => {
  const[name, updateName] = useState('');
  const[city, updateCity] = useState('');
  const[state, updateState] = useState('');
  const[founded, updateFounded] = useState('');
  const[description, updateDescription] = useState('');
  const[editing, updateEditing] = useState(false);
  const[deleting, updateDeleting] = useState(false);

  useEffect(() => {
    updateName(company.name);
    updateCity(company.city);
    updateState(company.state);
    updateDescription(company.description);
    let date = new Date(company.founded);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleString('en-US', options)
    updateFounded(date)
  }, [company])

  const updateApp = () => {
    return updateCompanies()
            .then((data) => {
              // update active company state
              return axios.get(`/companies/${company._id}`);
            })
            .then((company) => {
              updateActive(company.data);
            })
            .catch((err) => {
              throw err;
            })
  }

  const submitEdit = (editedCompany) => {
    axios.put(`/companies/${company._id}`, editedCompany)
         .then((data) => {
           // update master list of companies with edited data
           return updateApp();
          })
         .catch((err) => {
           console.error(err);
         })
  }

  const editHandler = () => {
    updateEditing(true);
  }

  const cancelEdit = () => {
    updateEditing(false);
  }

  const deleteHandler = () => {
    updateDeleting(true);
  }

  const confirmDelete = () => {
    axios.delete(`/companies/${company._id}`)
         .then((data) => {
           return updateCompanies()
         })
         .then((data) => {
           goBack();
         })
         .catch((err) => {
           console.error(err);
           goBack();
         })
  }

  const cancelDelete = () => {
    updateDeleting(false);
  }

  const addFounder = (founder) => {
    axios.post(`/founders/${company._id}`, founder)
         .then((data) => {
           return updateApp();
         })
         .catch((err) => {
           console.error(err);
         })
  }

  return (
    <div className="company-wrapper">

      <div className="company-detail-header">
        <h3>{name}</h3>

        <div className="detail-line-two-wrapper">
          <div className="detail-left">
            <span className="detail-line-two">{founded}</span>
            <span className="detail-line-two">{`${city}, ${state}`}</span>
          </div>

          <div className="detail-right">
            <button className="detail-line-two detail-btn" onClick={editHandler}>Edit</button>
            <button className="detail-line-two detail-btn" onClick={deleteHandler}>Delete</button>
          </div>
        </div>

        {/* if delete button is clicked, double check before deleting */}
        {deleting ?
          <p>
            Are you sure you want to delete {name}?
            <button className="detail-line-two detail-btn" onClick={confirmDelete}>Yes</button>
            <button className="detail-line-two detail-btn" onClick={cancelDelete}>No</button>
          </p>
          :
          ''
        }
      </div>

      <p className ="company-description">{description}</p>

      <h4 className="founders-header">Founders</h4>
      <Founders founders={company.founders} add={addFounder}/>

      {/* if editing, display edit form */}
      {editing ? <CompanyForm company={company} cancel={cancelEdit} submit={submitEdit}/> : ''}

      <div className="btn-wrapper">
        <button className="back-btn" onClick={goBack} >Go Back</button>
      </div>

  </div>
  )
}

export default CompanyDetail;