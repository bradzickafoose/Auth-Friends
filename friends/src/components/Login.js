import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = ({ setIsAuthenticated }) => {

  const [ userCredentials, setUserCredentials ] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();

  const handleChange = event => {
      setUserCredentials({
          ...userCredentials,
          [event.target.name]: event.target.value
      });
  };

  const handleSubmit = event => {
      event.preventDefault();

      axiosWithAuth()
          .post('/login', userCredentials)
          .then(response => {
              localStorage.setItem('token', response.data.payload);
              setIsAuthenticated(true);
              history.push('/friends');
          })
          .catch(error => console.error('Login.js > onSubmit:', error.message));

      setUserCredentials({
        username: '',
        password: ''
      })
  }

  return (
      <>
        <div className="w-full max-w-xs mx-auto mt-6">
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Sign in to your Auth Friends account
          </h2>
          <form onSubmit={handleSubmit} className="px-8 pt-6 pb-6 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input onChange={handleChange} name="username" value={userCredentials.username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input onChange={handleChange} name="password" value={userCredentials.password} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
            </div>
          </form>

          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Auth Friends. All rights reserved.
          </p>

        </div>
      </>
  )
};

export default Login;