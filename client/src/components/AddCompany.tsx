import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-date-picker'
import styled from 'styled-components'

import { useApiRequest } from '../hooks/api.hooks'
import { setSuccess, setSelectedDetailItem } from '../state/actions'
import ROUTES from '../router/routes'
import { Company } from '../types/types'

export const TextInput = styled.input.attrs({
  type: 'text',
  className:
    'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white',
})``
export const Label = styled.label.attrs({
  className: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
})``
export const buttonStyles =
  'mt-5 mr-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer'
export const ValidationError = styled.div.attrs({ className: 'required-error text-red-500' })``

interface AddCompanyProps {
  editing?: boolean
  company?: Company
  closeAction?: any
}
function AddCompany({ editing = false, company, closeAction }: AddCompanyProps) {
  const { register, handleSubmit, errors, setValue } = useForm()
  const [formData, setFormData] = useState({})
  const [submit, setSubmit] = useState(false)
  const [date, setDate] = useState(new Date(Date.now()))

  const createCompany = useApiRequest({
    method: editing ? 'PUT' : 'POST',
    endpoint: editing && !!company ? '/companies/' + company!.id : '/companies',
    successAction: editing ? setSelectedDetailItem : setSuccess,
    data: formData,
    successRedirect: editing ? undefined : ROUTES.companies,
  })

  const onSubmit = (data: any) => {
    setFormData({ ...data, dateFounded: date })
    setSubmit(true)
  }

  const onCalendarChange = (date: Date) => {
    setDate(date)
  }

  useEffect(() => {
    if (submit) {
      createCompany()
      setSubmit(false)
      if (closeAction) {
        closeAction()
      }
    }
  }, [submit]) // eslint-disable-line

  useEffect(() => {
    if (editing && !!company) {
      const { name, description, city, state, dateFounded, logoUrl } = company
      setValue([{ name }, { description }, { city }, { state }, { logoUrl }, { dateFounded: new Date(dateFounded) }])
    }
  }, [editing, company, setValue])

  return (
    <>
      <div className="w-full text-2xl text-center my-6 text-gray-700 font-semibold">
        {editing ? `Editing: ${company!.name}` : 'Add Company'}
      </div>
      <form className="w-10/12 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/4 px-3 mb-6">
            <Label>Comany Name</Label>
            <TextInput name="name" ref={register({ required: true })} placeholder="Thievery Inc." />
            {errors.name && <ValidationError>Required</ValidationError>}
          </div>
          <div className="w-1/4 px-3 mb-6">
            <Label>City</Label>
            <TextInput name="city" ref={register({ required: true })} placeholder="Ft. Lupton" />
            {errors.city && <ValidationError>Required</ValidationError>}
          </div>
          <div className="w-1/4 px-3 mb-6">
            <Label>State</Label>
            <TextInput name="state" ref={register({ required: true })} placeholder="Colorado" />
            {errors.state && <ValidationError>Required</ValidationError>}
          </div>
          <div className="w-2/12 px-3 mb-6 justify-end">
            <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Date founded</Label>
            <DatePicker onChange={onCalendarChange} value={date} />
          </div>

          <div className="w-full px-3 my-5">
            <Label>What does your company do?</Label>
            <textarea
              name="description"
              ref={register({ required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40"
              id="grid-last-name"
              placeholder="Description"
            />
            {errors.description && <ValidationError>Required</ValidationError>}
          </div>

          <div className="w-full px-3 my-5">
            <Label>Logo Image URL</Label>
            <TextInput name="logoUrl" ref={register({ required: true })} placeholder="http://fillmurray.com/200/300" />
            {errors.logoUrl && <ValidationError>Required</ValidationError>}
          </div>
        </div>

        <input id="submit-btn" className={buttonStyles} type="submit" />
        {editing && (
          <button onClick={closeAction} className={buttonStyles}>
            Cancel
          </button>
        )}
      </form>
    </>
  )
}

export default AddCompany
