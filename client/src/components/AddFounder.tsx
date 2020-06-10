import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useApiRequest } from '../hooks/api.hooks'
import { setSelectedDetailItem } from '../state/actions'
import { TextInput, Label, buttonStyles, ValidationError } from './AddCompany'

interface AddFounderProps {
  companyId: string
  closeAction?: any
}

function AddFounder({ closeAction, companyId }: AddFounderProps) {
  const { register, handleSubmit, errors } = useForm()
  const [formData, setFormData] = useState({})
  const [submit, setSubmit] = useState(false)

  const addFounder = useApiRequest({
    method: 'POST',
    endpoint: `/companies/${companyId}/add-founder`,
    successAction: setSelectedDetailItem,
    data: formData,
  })

  const onSubmit = (data: any) => {
    setFormData(data)
    setSubmit(true)
  }

  useEffect(() => {
    if (submit) {
      addFounder()
      setSubmit(false)
      if (closeAction) {
        closeAction()
      }
    }
  }, [submit]) // eslint-disable-line

  return (
    <form className="w-10/12" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 ">
          <Label>FirstName</Label>
          <TextInput name="firstName" ref={register({ required: true })} placeholder="John" />
          {errors.firstName && <ValidationError>Required</ValidationError>}
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 ">
          <Label>Last Name</Label>
          <TextInput name="lastName" ref={register({ required: true })} placeholder="Wick" />
          {errors.lastName && <ValidationError>Required</ValidationError>}
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 ">
          <Label>Title</Label>
          <TextInput name="title" ref={register({ required: true })} placeholder="Chief People Inspector" />
          {errors.title && <ValidationError>Required</ValidationError>}
        </div>
      </div>
      <input id="submit-founder-btn" className={buttonStyles} type="submit" />

      <button onClick={closeAction} className={buttonStyles}>
        Cancel
      </button>
    </form>
  )
}

export default AddFounder
