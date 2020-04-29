import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LoginForm = () => {

    const [userCredentials, setUserCredentials] = useState({
        username: '',
        password: ''
    });

    const history = useHistory();

    const handleChange = e => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', userCredentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                history.push('/friends');
            })
            .catch(error => console.log('login error', error));
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='username'
                    value={userCredentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={userCredentials.password}
                    onChange={handleChange}
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default LoginForm