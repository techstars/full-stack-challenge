import { useContext } from 'react'

import Context from '../appContext'

export const useAppContext = () => {
  return useContext(Context)
}
