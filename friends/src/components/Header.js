import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  }

  return (
        <header className='App-header'>

          <div className='Logo-container'>
            <img src={logo} className='Logo' alt='logo' />
            <Link to="/"><strong>Auth</strong> Friends</Link>
          </div>

          <nav>
            { isAuthenticated ?
              <>
                <Link to='/friends'>Friends</Link>
                <Link to='/login' onClick={logout}>Logout</Link>
              </>
              : <Link to='/login'>Login</Link> }
          </nav>

        </header>
  );
}

export default Header;
