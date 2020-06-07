const baseHeaders = {
  Accept: 'application/json'
}

export const getRequest = async endpoint => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/${endpoint}`,
    {
      method: 'GET',
      headers: baseHeaders
    }
  )
  const json = await response.json()
  return json
}
