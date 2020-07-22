import React, { useState, useEffect } from 'react';
import Login from './containers/Login/Login';
import AdminHome from './containers/Admin/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  useEffect(
    () => {
      if (getCookieValue('loggedin') === 'true') {
        setIsAuthenticated(true);
      }
    },
    [ isAuthenticated ]
  );

  const getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  return (
    <div className='App'>
      {isAuthenticated ? (
        <AdminHome setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
