import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios';

const App = () => {
  const api = axios.create({
    baseURL: "http://localhost:3001/"
  })
  const [companies, setCompanies] = useState([])

  const handleSubmit = (value) => {
    console.log('hello ther!!!11', value)
    api({
      method: 'post',
      url: '/postTest',
      data: value
    })
    .then((response) => {
      let { data } = response
      console.log(data, 'in put')
      // setCompanies(data.Name)
      setCompanies(arr => [...arr, ...[data]])
    })
    .catch((error) => {
      console.log(error, 'error in the front')
    })
  }

  const handleClick = () => {
    api({
      method: 'get',
      url: '/test'
    })
    .then((response) => {
      let { data } = response
      console.log(data, 'response dawg')
      setCompanies(arr => [...arr, ...data])
    })
    .catch((error) => {
      console.log(error, 'error in the front')
    })
  }
console.log(companies, 'checking companies!!!')
const companiesArr = companies.length > 0 ? companies : [] 
  return (
    <div>
      Test
      <Formik onSubmit={handleSubmit} initialValues={{ company: '', founded: '', city: '', state: '' }}>
        <Form>
          <Field type="company" name="company"/>
          <Field type="founded" name="founded"/>
          <Field type="city" name="city"/>
          <Field type="state" name="state"/>
          <button type="submit">submit</button>
        </Form>
      </Formik>
          <button onClick={handleClick}>get stuff</button>
          {companiesArr.map((val) => {
            return <li>{val.Name || ''}</li>
          })}
    </div>
  )
}

export default App;
