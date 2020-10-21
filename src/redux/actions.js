import { LOGIN, LOGOUT, SUBMIT_FORM, ERROR } from './types';

export const submitForm = (email, password) => {
  return async dispatch => {
    try {
      dispatch({ type: SUBMIT_FORM });
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://tager.dev.ozitag.com/api/auth/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          'clientId': 1,
          'email': `${email}`,
          'password': `${password}`
        })
      });
      if(response.ok) {
        const json = await response.json();
        const token = json.data.accessToken;
        dispatch(login(token));
      } else {
        const error = await response.json();
        const message = await error.message;
        throw new Error(message);
      }
    } catch(e) {
      dispatch(fetchError(e.message));
    }
  }
};

const login = (token) => {
  return async dispatch => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://tager.dev.ozitag.com/api/tager/user/profile', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      if(response.ok) {
        const json = await response.json();
        const user = json.data;
        dispatch({ type: LOGIN, user });
      } else {
        const error = await response.json();
        const message = await error.message;
        throw new Error(message);
      }
    } catch(e) {
      dispatch(fetchError(e.message));
    }
  }
}

const fetchError = (error) => {
  return {
    type: ERROR,
    error
  }
};
