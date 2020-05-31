
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams, Redirect } from 'react-router-dom'

import { bff } from '../../../config'

const DeleteButton = () => {
  const [redirect, setRedirect] = useState(false)
  const params = useParams()

  const handleOnClick = () => {
    const url = bff + '/companies/' + params.id

    return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
      .then(handleResponse)
      .catch(err => console.error(err))
  }

  const handleResponse = (res) => {
    if (res.status === 204) {
      setRedirect(true)
      return
    }
  }

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <>
      <Button onClick={handleOnClick} className="buttons" variant="danger">Delete</Button>
    </>
  )
}

export default DeleteButton