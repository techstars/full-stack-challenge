//Components
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Types
import { Toasty } from '../types'

export const triggerToast = (option: Toasty): void => {
  toast(option.description)
}
