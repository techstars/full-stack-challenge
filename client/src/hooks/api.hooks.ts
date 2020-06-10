import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import axios, { AxiosRequestConfig } from 'axios'

import { fetching, error } from '../state/actions'
import { useAppContext } from './app.hooks'

interface UseApiRequest {
  endpoint: string
  successAction: Function
  method?: AxiosRequestConfig['method']
  params?: object
  successRedirect?: string
  data?: object
}

export const useApiRequest = ({
  endpoint,
  successAction,
  method = 'GET',
  successRedirect,
  data,
  params,
}: UseApiRequest) => {
  const { dispatch } = useAppContext()
  const history = useHistory()

  const makeRequest = useCallback(async () => {
    const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000'

    dispatch(fetching())
    try {
      const response = await axios({
        method,
        url: `${apiBaseUrl}${endpoint}`,
        data,
        params,
      })
      dispatch(successAction(response.data))

      if (successRedirect) {
        history.push(successRedirect)
      }
    } catch (e) {
      dispatch(error(e))
    }
  }, [endpoint, method, successAction, dispatch, history, successRedirect, data, params])

  return makeRequest
}
