import React from 'react';
import Alert from '../Alert';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const FormWrapper = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit = {formik.handleSubmit} className = 'from'>
      <div className = 'form__filed'>
        <label htmlFor = 'email'>Email</label>
        <input
          id = 'email'
          name = 'email'
          type = 'email'
          onChange = {formik.handleChange}
          value = {formik.values.email}
        />
        {formik.errors.email ? <Alert>{formik.errors.email}</Alert> : null}
      </div>
      <div className = 'form__filed'>
        <label htmlFor = 'email'>Password</label>
        <input
          id = 'password'
          name = 'password'
          type = 'password'
          onChange = {formik.handleChange}
          value = {formik.values.password}
        />
        {formik.errors.email ? <Alert>{formik.errors.password}</Alert> : null}
      </div>
      <button type = 'submit' className = 'form__button'>Submit</button>
    </form>
  );
};

export default FormWrapper;
