import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Login from './Login';


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
            <Route path='/login' component={Login} />
            <Route component={Login} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
