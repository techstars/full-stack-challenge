import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios';
import { object, string, number} from 'yup';
import Card from './components/cardTable'

const App = () => {
  // const port = process.env.PORT || "3001"
  // console.log(process.env.PORT, port, 'testportstuff!!!!!')
  // const api = axios.create({
  //   baseURL: port
  // })
  const [companies, setCompanies] = useState([])

  const validationSchema = object({
    company: string().required(`Enter your company's name`),
    city: string().required('Enter a city'),
    state: string().required('Enter a state'),
    founded: number().required('When was the company founded?')
  })

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

// const buttons = [<button>heyhye</button>]

console.log(companies, 'checking companies!!!')
const companiesArr = companies.length > 0 ? companies : [] 
  return (
    <div>
      Test
      <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={{ company: '', founded: '', city: '', state: '' }}>
        <Form>
          <Field type="company" name="company"/>
          <br/>
          <Field type="founded" name="founded"/>
          <br/>
          <Field type="city" name="city"/>
          <br/>
          <Field type="state" name="state"/>
          <br/>
          <button type="submit">submit</button>
        </Form>
      </Formik>
          <button onClick={handleClick}>get stuff</button>
          {companiesArr.map((val) => {
            return <li>{val.Name || ''}</li>
          })}
          <Card />
    </div>
  )
}

export default App;
