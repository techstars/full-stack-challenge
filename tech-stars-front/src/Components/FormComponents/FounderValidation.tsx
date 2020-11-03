//Formik
import * as Yup from 'yup'

//Modules
import { requiredMessage } from '../../Modules/helpers.module'

export const FounderValidation = Yup.object().shape({
  first_name: Yup.string().required(requiredMessage).typeError(requiredMessage),
  last_name: Yup.string().required(requiredMessage).typeError(requiredMessage),
  title: Yup.string().required(requiredMessage).typeError(requiredMessage),
})
