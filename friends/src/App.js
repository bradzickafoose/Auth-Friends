import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';

function App() {

  return (
      <div className='App'>
        <header className='App-header'>
          <div className='Logo-container'>
            <img src={logo} className='Logo' alt='logo' />
            <h1>Auth Friends</h1>
          </div>
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/login' onClick={() => localStorage.removeItem('token')}>Logout</Link>
          </nav>
        </header>
        <Switch>
          <Route path='/login'>
            {localStorage.getItem('token') ? <Redirect to='/' /> : <Login />}
          </Route>
          <PrivateRoute path='/'>
            <Friends />
          </PrivateRoute>
        </Switch>
      </div>
  );
}

export default App;
