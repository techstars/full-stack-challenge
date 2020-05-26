import * as Yup from 'yup';

const CompanySchema = Yup.object().shape({
  city: Yup.string().required('City is required'),
  dateFounded: Yup.date().nullable(),
  description: Yup.string().required('Company description is required'),
  name: Yup.string().required('Company name is required'),
  state: Yup.string().required('State is required'),
});

export const initialValues = {
  city: '',
  dateFounded: null,
  description: '',
  name: '',
  state: '',
};

export default CompanySchema;
