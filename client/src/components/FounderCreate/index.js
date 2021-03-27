import React, { useState } from 'react';
import clsx from 'clsx';
import Api from '../../apis';
import './index.css';

const FounderCreate = ({onClose, companyId}) => {
  const apis = new Api();
  const formModel = {
    name: '',
    title: ''
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
    if(formData.name && formData.title) {
      setSaving(true);
      await apis.createFounder({
        name: formData.name,
        title: formData.title,
        company: companyId
      });
      setSaving(false);
      onClose && onClose();
    }
    else {
      setErrors({
        name: !formData.name,
        title: !formData.title
      })
    }
  }

  return (
    <div className="form-container">
      <span className="heading">Add a founder</span>
      <input 
        className={clsx({["input-group-item"]: true, ["input-error"]: errors.name})} 
        name="name" 
        onChange={setFormValue} 
        value={formData.name} 
        placeholder=" Name *Required"
      />
      <input 
        className={clsx({["input-group-item"]: true, ["input-error"]: errors.title})}
        name="title"
        onChange={setFormValue}
        value={formData.titla}
        placeholder=" Title *Required"
      />
      <div className='save-button' onClick={createNewCompany}>{isSaving? "ADDING": "ADD"}</div>
    </div>
  );
}

export default FounderCreate;