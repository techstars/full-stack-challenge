//React
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

//Formik
import { Form, Formik } from 'formik'

//Components
import PanelComponent from './PanelComponent'
import PanelMultipleComponent from './PanelMultipleComponent'
import { ToastContainer } from 'react-toastify'
import { CompanyValidation } from './CompanyValidation'

//Helpers
import axios, { AxiosResponse } from 'axios'
import { InitialFormValues } from './CompanyFormHelpers'

//Styles
import '../../Styles/Form.scss'

//Modules
import { triggerToast } from '../../Modules/toast.module'
import { Endpoints } from '../../Modules/endpoints.module'
import _ from 'lodash'

interface FormValues {
  name: string | null
  short_description: string | null
  city: string | null
  state: string | null
  founded_date: string | null
  description: string | null
}

const handleSubmit = (values: FormValues, formType: string | undefined, id?: number) => {
  const method = formType === 'create' ? 'post' : 'patch'
  const url =
    formType === 'edit'
      ? `https://tech-stars.herokuapp.com/companies/${id}`
      : 'https://tech-stars.herokuapp.com/companies'

  const fetch = async () => {
    try {
      const response: AxiosResponse = await axios({
        method: method,
        url: url,
        data: values,
      })
      triggerToast({
        description:
          formType === 'create'
            ? `${JSON.stringify(response.data.name)} has been successfully created!`
            : `${JSON.stringify(response.data.name)} has been successfully update!`,
      })
    } catch (error) {
      triggerToast({
        description: 'Failed to create new company',
      })
    }
  }
  fetch()
}

const CompanyForm: React.FC = (): JSX.Element => {
  const initialValues: FormValues = InitialFormValues
  const { pathname, state } = useLocation<any>()
  const history = useHistory()
  const formType: string | undefined = _.last(pathname.split('/'))
  const companyData = state && state.company

  const determineLocationString = () => {
    switch (formType) {
      case 'edit':
        return 'Update Company'
      default:
        return 'Create Company'
    }
  }

  const dateFormatter = (value: string) => {
    if (value === 'Invalid Date') {
      return '---'
    } else if (value !== '---') {
      const date = new Date(value as string)
      const d = new Date(date.getTime())
      const dd = d.getDate()
      const mm = d.getMonth()
      const yy = d.getFullYear().toString()
      if (mm < 10) {
        return `${yy}-0${mm}-${dd}`
      }
      return `${yy}-${mm}-${dd}`
    }
    return value
  }

  const editInitialFormValues = {
    name: companyData?.name,
    short_description: companyData?.short_description,
    city: companyData?.city,
    state: companyData?.state,
    founded_date: dateFormatter(companyData?.founded_date),
    description: companyData?.description,
  }

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={formType === 'create' ? initialValues : editInitialFormValues}
        onSubmit={(values) => {
          formType === 'create'
            ? handleSubmit(values, formType)
            : handleSubmit(values, formType, companyData.id)
        }}
        validationSchema={CompanyValidation}
      >
        <Form>
          <header className="company__form--header">
            <i
              className="fas fa-arrow-circle-left"
              onClick={() => history.push(Endpoints.Companies)}
            ></i>
            <div className="company__form--header-title">{determineLocationString()}</div>
            <button type="submit" className="company__form--submit-btn">
              {determineLocationString().toUpperCase()}
            </button>
          </header>
          <div className="company__form--create-wrapper">
            <PanelComponent name="name" label="Name" placeholder="TechStars" />
            <PanelComponent
              name="short_description"
              label="Short Description"
              placeholder="Brief 1 sentence overview"
              className="description"
            />
            <PanelMultipleComponent names={['city', 'state']} label="Location" />
            <PanelComponent name="founded_date" label="Founded Date" placeholder="10/12/2020" />
            <PanelComponent
              name="description"
              label="Full Description"
              placeholder="Full Description"
              className="description"
            />
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default CompanyForm
