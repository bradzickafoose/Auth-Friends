import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Login from '../routes/Login';
import PrivateRoute from '../components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Auth Friends</h1>
        </header>
        <section>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
          <Switch>
            <Route path='/login'>
              {localStorage.getItem('token') ? <Redirect to='/' /> : <Login />}
            </Route>
            <PrivateRoute path='/'>
              <h1>Friends</h1>
            </PrivateRoute>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
