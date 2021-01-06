import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const TempTry = () => {
  const dropdownOptions = [
    { key: 'Select', value: '' },
    { key: 'Myrra', value: 'Myrra' }
  ];

  const radioOptions = [
    { key: 'Select', value: '' },
    { key: 'Myrra', value: 'Myrra' },
    { key: 'xxx', value: 'xxxxx' }
  ];

  const checkboxOptions = [
    { key: 'Select', value: '' },
    { key: '1', value: '1' },
    { key: '2', value: '2' }
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: []
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required')
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="textarea"
              label="description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select an option"
              name="selectOption"
              options={dropdownOptions}
            />
            <FormikControl
              control="radio"
              label="Select an radio"
              name="radioOption"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Select an Box ->"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TempTry;
