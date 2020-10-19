import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('https://tager.dev.ozitag.com/api/auth/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "clientId": 1,
        "email": "user@ozitag.com",
        "password": "user"
      })
    }).then(data => { console.log(data); return data.json() }).then(data => console.log(data))
  }, []);

  return(
    <h1>Test</h1>
  )
};

export default App;
