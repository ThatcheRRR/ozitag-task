import React from 'react';
import Form from '../Form';
import './app.scss';

const App = () => {
  // useEffect(() => {
  //   fetch('https://cors-anywhere.herokuapp.com/https://tager.dev.ozitag.com/api/auth/user', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       'clientId': 1,
  //       'email': 'user@ozitag.com',
  //       'password': 'user'
  //     })
  //   }).then(res => { console.log(res); return res.json() }, err => console.log(err.message)).then(data => console.log(data))
  // }, []);

  return(
    <Form />
  )
};

export default App;
