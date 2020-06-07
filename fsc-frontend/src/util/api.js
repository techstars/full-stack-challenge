const baseHeaders = {
  "Content-Type": "application/json",
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

export const patchRequest = async (endpoint, data) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/${endpoint}`,
    {
      method: 'PATCH',
      headers: baseHeaders,
      body: JSON.stringify(data)
    }
  )
  const json = await response.json()
  return json
}
