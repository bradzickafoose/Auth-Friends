import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';
import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(!!localStorage.getItem('token'));
  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      axiosWithAuth()
          .get('/friends')
          .then(response => setFriends(response.data))
          .catch(error => console.error('Error fetching friends', error));
    }
  }, [isAuthenticated]);

  return (
      <div className='App'>
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

        <Switch>
          <Route path='/login'>
            {localStorage.getItem('token') ? <Redirect to='/' /> : <Login setIsAuthenticated={setIsAuthenticated} />}
          </Route>
          <PrivateRoute path='/' isAuthenticated={isAuthenticated}>
            <Friends friends={friends} setFriends={setFriends} />
          </PrivateRoute>
        </Switch>
      </div>
  );
}

export default App;
