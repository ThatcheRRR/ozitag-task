import React from 'react';
import { useSelector } from 'react-redux';
import UserPage from '../UserPage';
import Form from '../Form';
import './app.scss';

const App = () => {
  const isLogged = useSelector(state => state.isLogged);

  return(
    <>
      {isLogged && <UserPage />}
      {!isLogged && <Form />}
    </>
  )
};

export default App;
