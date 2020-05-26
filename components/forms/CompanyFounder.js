import FormHelperText from '@material-ui/core/FormHelperText';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';
import SubmitButton from '../buttons/SubmitButton';
import CompanyFounderSchema, { initialValues } from './CompanyFounderSchema';

export default function CompanyFounderForm(props) {
  const onClose = props.onClose;
  const [error, setError] = useState(false);

  return (
    <Formik
      validationSchema={CompanyFounderSchema}
      onSubmit={async (values, { resetForm }) => {
        setError(false);
        const { name, title } = values;
        const response = await fetch('/api/companyFounders', {
          method: 'POST',
          body: JSON.stringify({companyId: props.companyId , name, title}),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        await response.json();

        resetForm();
        onClose(true);
      }}
      initialValues={initialValues}
    >
      {({
        errors,
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              label="Name"
              type="text"
              component={TextField}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Field
              name="title"
              label="Title"
              type="text"
              component={TextField}
              fullWidth
              margin="normal"
              variant="outlined"
            />

            {error && (
              <FormHelperText error>{error}</FormHelperText>
            )}
            <div style={{ paddingTop: 10, paddingBottom: 20 }}>
              <SubmitButton
                fullWidth
                size="large"
                isSubmitting={isSubmitting}
                disabled={Boolean(Object.keys(errors).length)}
                label="Continue"
              />
            </div>
          </form>
        );
      }}
    </Formik>
  );
};
