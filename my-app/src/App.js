import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios';
import { object, string, number} from 'yup';

const App = () => {
  const [companies, setCompanies] = useState([])

  const validationSchema = object({
    company: string().required(`Enter your company's name`),
    city: string().required('Enter a city'),
    state: string().required('Enter a state'),
    founded: number().required('When was the company founded?')
  })

  const handleSubmit = (value) => {
    console.log('handleSubmit value:', value)
    axios({
      method: 'post',
      url: '/postTest',
      data: value
    })
    .then((response) => {
      let { data } = response
      setCompanies(arr => [...arr, ...[data]])
    })
    .catch((error) => {
      console.log(error, 'error in post response')
    })
  }

  const handleClick = () => {
    axios({
      method: 'get',
      url: '/test'
    })
    .then((response) => {
      let { data } = response
      setCompanies(arr => [...arr, ...data])
    })
    .catch((error) => {
      console.log(error, 'error in get response')
    })
  }

const companiesArr = companies.length > 0 ? companies : [] 
  return (
    <div>
      Companies Challenge
      <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={{ company: '', founded: '', city: '', state: '' }}>
        <Form>
          <Field placeholder="company" type="company" name="company"/>
          <br/>
          <Field placeholder="founded" type="founded" name="founded"/>
          <br/>
          <Field placeholder="city" type="city" name="city"/>
          <br/>
          <Field placeholder="state" type="state" name="state"/>
          <br/>
          <button type="submit">submit</button>
        </Form>
      </Formik>
          <button onClick={handleClick}>get</button>
          {companiesArr.map((val) => {
            return <li>{val.Name || ''}</li>
          })}
    </div>
  )
}

export default App;
