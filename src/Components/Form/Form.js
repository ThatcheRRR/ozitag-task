import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Alert from '../Alert';
import { submitForm } from '../../redux/actions';
import './form.scss';

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 8) {
    errors.password = 'Must be 8 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Form = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: ({ email, password }) => {
      dispatch(submitForm(email, password));
    },
  });

  return (
    <form onSubmit = {formik.handleSubmit} className = 'form'>
      <div className = 'form__field'>
        <label htmlFor = 'email' className = 'form__label'>Email</label>
        <input
          id = 'email'
          name = 'email'
          type = 'email'
          onChange = {formik.handleChange}
          value = {formik.values.email}
          className = 'form__input'
        />
        {formik.errors.email ? <Alert>{formik.errors.email}</Alert> : null}
      </div>
      <div className = 'form__field'>
        <label htmlFor = 'email' className = 'form__label'>Password</label>
        <input
          id = 'password'
          name = 'password'
          type = 'password'
          onChange = {formik.handleChange}
          value = {formik.values.password}
          className = 'form__input'
        />
        {formik.errors.password ? <Alert>{formik.errors.password}</Alert> : null}
      </div>
      <button type = 'submit' className = 'form__button'>Submit</button>
      {error && <Alert>{error}</Alert>}
    </form>
  );
};

export default Form;
