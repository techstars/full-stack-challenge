//React
import React from 'react'

//Formik
import { Form, Formik } from 'formik'

//Components
import PanelComponent from './PanelComponent'
import PanelMultipleComponent from './PanelMultipleComponent'
import { ToastContainer } from 'react-toastify'
import { FounderValidation } from './FounderValidation'

//Helpers
import axios, { AxiosResponse } from 'axios'
import _ from 'lodash'
import { InitialFormValues } from './FounderFormHelpers'

//Styles
import '../../Styles/Form.scss'

//Modules
import { triggerToast } from '../../Modules/toast.module'

interface FormValues {
  first_name: string | null
  last_name: string | null
  title: string | null
  company_id: number | null
}

const handleSubmit = (
  values: FormValues,
  handleNewFounders: (companyID: number | undefined) => void,
  companyID?: number
) => {
  const submitValues = _.cloneDeep(values)
  _.set(submitValues, 'company_id', _.toNumber(companyID))

  const fetch = async () => {
    try {
      const response: AxiosResponse = await axios({
        method: 'post',
        url: 'https://tech-stars.herokuapp.com/founders',
        data: submitValues,
      })
      triggerToast({
        description: `${JSON.stringify(response.data.first_name)} has been successfully added!`,
      })
    } catch (error) {
      triggerToast({
        description: 'Failed to new add founder to company',
      })
    } finally {
      handleNewFounders(companyID)
    }
  }
  fetch()
}

interface Props {
  companyID: number
  handleNewFounders: () => void
}

const FounderForm: React.FC<Props> = ({ companyID, handleNewFounders }): JSX.Element => {
  const initialValues: FormValues = InitialFormValues

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values, handleNewFounders, companyID)
        }}
        validationSchema={FounderValidation}
      >
        <Form>
          <button className="company-button--create submit" type="submit">
            SUBMIT
          </button>
          <div className="future__form--create-wrapper">
            <PanelMultipleComponent names={['first_name', 'last_name']} label="Full Name" />
            <PanelComponent name="title" label="Title" placeholder="CEO/Founder" />
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default FounderForm
