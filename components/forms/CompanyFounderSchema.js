import * as Yup from 'yup';

const CompanyFounderSchema = Yup.object().shape({
  name: Yup.string().required('Founder name is required'),
  title: Yup.string().required('Founder title is required'),
});

export const initialValues = {
  name: '',
  title: '',
};

export default CompanyFounderSchema;
