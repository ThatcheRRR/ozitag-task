import React, { useEffect } from 'react';
import FormWrapper from '../FormWrapper';

const App = () => {
  useEffect(() => {
    fetch('https://tager.dev.ozitag.com/api/auth/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        'clientId': 1,
        'email': 'user@ozitag.com',
        'password': 'user'
      })
    }).then(res => { console.log(res); return res.json() }, err => console.log(err.message)).then(data => data.data.accessToken).then(token => {
      fetch('https://tager.dev.ozitag.com/api/tager/user/profile', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(res => { console.log(res); return res.json() }, err => console.log(err.message)).then(data => console.log(data))
    })
  }, []);

  useEffect(() => {

  }, []);

  return(
    <FormWrapper />
  )
};

export default App;
