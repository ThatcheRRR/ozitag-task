import { LOGIN, LOGOUT, SUBMIT_FORM, ERROR } from './types';

const initialState = {
  isLogged: false,
  error: null,
  token: null,
  user: null
};

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_FORM:
      return {...state, error: null};
    case LOGIN:
      return {...state, isLogged: true, user: action.user, token: action.token};
    case LOGOUT:
      return {...state, isLogged: false};
    case ERROR:
      return {...state, error: action.error};
    default: return state;
  }
};
