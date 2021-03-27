import React, { useState } from 'react';
import clsx from 'clsx';
import Api from '../../apis';
import './index.css';

const CompanyCreate = ({onClose, formModelData, update = false}) => {
  const apis = new Api();
  console.log(formModelData, update);
  const formModel = update ? {
    name: formModelData.name,
    city: formModelData.city,
    state: formModelData.state,
    description: formModelData.description,
    founded: formModelData.founded.split('T')[0]
  }:{
    name: '',
    city: '',
    state: '',
    founded: '',
    description: ''
  };

  const [formData, setFormData] = useState(formModel);
  const [errors, setErrors] = useState(formModel);
  const [isSaving, setSaving] = useState(false);

  const setFormValue = (e) => {
    const fd = {...formData};
    fd[e.target.name] = e.target.value;
    setFormData(fd);
  }

  const createNewCompany = async () => {
    if(formData.name && formData.city && formData.state && formData.description) {
      setSaving(true);
      update ? 
      await apis.updateCompanyById(formModelData.id, {
        name: formData.name,
        city: formData.city,
        state: formData.state,
        description: formData.description,
        founded: formData.founded
      })
      : await apis.createCompany({
        name: formData.name,
        city: formData.city,
        state: formData.state,
        description: formData.description,
        founded: formData.founded ? formData.founded: null
      });
      setSaving(false);
      onClose && onClose();
    }
    else {
      setErrors({
        name: !formData.name,
        city: !formData.city,
        state: !formData.state,
        description: !formData.description
      })
    }
  }

  return (
    <div className="form-container">
      <span className="heading">Create a new company</span>
      <input 
        className={clsx({["input-name"]: true, ["input-error"]: errors.name && !update})} 
        name="name" 
        onChange={setFormValue} 
        value={formData.name} 
        placeholder=" Company Name *Required"
      />
      <div className="input-group-container">
        <input 
          className={clsx({["input-group-item"]: true, ["input-error"]: errors.city && !update})} 
          name="city" 
          onChange={setFormValue} 
          value={formData.city} 
          placeholder=" City *Required"
        />
        <input 
          className={clsx({["input-group-item"]: true, ["input-error"]: errors.state && !update})}
          name="state"
          onChange={setFormValue}
          value={formData.state}
          placeholder=" State *Required"
        />
        <input
          className="input-group-item"
          name="founded"
          onChange={setFormValue}
          value={formData.founded}
          onFocus={e => e.currentTarget.type = 'Date'}
          placeholder=" Founded Date"
        />
      </div>
      <textarea 
        className={clsx({["input-description"]: true, ["input-error"]: errors.description && !update})} 
        name="description" 
        onChange={setFormValue} 
        value={formData.description} 
        placeholder=" Description *Required"
      />
      <div className='save-button' onClick={createNewCompany}>{isSaving? "SAVING": "SAVE"}</div>
    </div>
  );
}

export default CompanyCreate;