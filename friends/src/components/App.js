import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Login from '../routes/Login';
import PrivateRoute from '../components/PrivateRoute';
import Friends from '../routes/Friends';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <div className='Logo-container'>
            <img src={logo} className='Logo' alt='logo' />
            <h1>Auth Friends</h1>
          </div>
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/friends'>Friends</Link>
          </nav>
        </header>
        <section>
          <Switch>
            <Route path='/login'>
              {localStorage.getItem('token') ? <Redirect to='/' /> : <Login />}
            </Route>
            <PrivateRoute path='/'>
              <Friends />
            </PrivateRoute>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
