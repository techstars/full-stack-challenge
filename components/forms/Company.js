import DateFnsUtils from '@date-io/date-fns';
import FormHelperText from '@material-ui/core/FormHelperText';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';
import SubmitButton from '../buttons/SubmitButton';
import CompanySchema, { initialValues } from './CompanySchema';

export default function CompanyForm(props) {
  const onClose = props.onClose;
  const [error, setError] = useState(false);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        validationSchema={CompanySchema}
        onSubmit={async (values, { resetForm }) => {
          setError(false);
          const { city, dateFounded, description, name, state } = values;
          const databaseDateValue = dateFounded ? dateFounded.toISOString().split('T')[0] : '';  // TODO: properly convert form Date() value into SQLite date string

          console.log(city, dateFounded, description, name, state);
          const response = await fetch('/api/companies', {
            method: 'POST',
            body: JSON.stringify({city, dateFounded: databaseDateValue, description, name, state}),
            headers: {
              'Content-Type': 'application/json'
            },
          });
          const jsonResult = await response.json();
          console.log(`POST Result ID is: ${jsonResult.id}`)
          resetForm();
          onClose(true);
        }}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched
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
                name="description"
                label="Description"
                type="text"
                component={TextField}
                fullWidth
                multiline
                rows={3}
                margin="normal"
                variant="outlined"
              />
              <Field
                name="city"
                label="City"
                type="text"
                component={TextField}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Field
                name="state"
                label="State"
                type="text"
                component={TextField}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <KeyboardDatePicker
                error={touched.dateFounded && !!errors.dateFounded}
                name="dateFounded"
                label="Date Founded"
                inputVariant="outlined"
                fullWidth
                margin="normal"
                format="MM/dd/yyyy"
                value={values.dateFounded || null}
                onBlur={() => {
                  if (!touched.dateFounded) {
                    setFieldTouched('dateFounded');
                  }
                }}
                onChange={(value) => {
                  setFieldTouched('dateFounded');
                  setFieldValue('dateFounded', value);
                }}
                disabled={isSubmitting}
              >
              </KeyboardDatePicker>
              {touched.dateFounded && Boolean(errors.dateFounded) && errors.dateFounded === 'Required' && (
                <FormHelperText style={{marginLeft: 14, marginTop: -5, marginBottom: 10}} error>{errors.dateFounded}</FormHelperText>
              )}

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
    </MuiPickersUtilsProvider>
  );
};
