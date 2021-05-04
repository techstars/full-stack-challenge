import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios';

const App = () => {
  const api = axios.create({
    baseURL: "http://localhost:3001/"
  })
  const [firstName, setFirstName] = useState('')

  const handleSubmit = (value) => {
    console.log('hello ther!!!11', value)
    setFirstName(value.name)
  }

  const handleClick = () => {
    api({
      method: 'get',
      url: '/test'
    })
    .then((response) => {
      let { data } = response
      console.log(data, 'response dawg')
      setFirstName(data[0].Name)
    })
    .catch((error) => {
      console.log(error, 'error in the front')
    })
  }

  return (
    <div>
      Test
      <Formik onSubmit={handleSubmit} initialValues={{ name: '' }}>
        <Form>
          <Field type="firstName" name="name"/>
          <button type="submit">submit</button>
          <button onClick={handleClick}>get stuff</button>
        </Form>
      </Formik>
      <li>{firstName}</li>
    </div>
  )
}

export default App;
