//Formik
import * as Yup from 'yup'

//Modules
import { requiredMessage } from '../../Modules/helpers.module'

export const CompanyValidation = Yup.object().shape({
  name: Yup.string().required(requiredMessage).typeError(requiredMessage),
  short_description: Yup.string().required(requiredMessage).typeError(requiredMessage),
  city: Yup.string().required(requiredMessage).typeError(requiredMessage),
  state: Yup.string()
    .required(requiredMessage)
    .typeError(requiredMessage)
    .test('len', 'Wrong Format', (val: string | null | undefined) => val?.length === 2),
  founded_date: Yup.string().required(requiredMessage).typeError(requiredMessage),
  description: Yup.string().required(requiredMessage).typeError(requiredMessage),
})
