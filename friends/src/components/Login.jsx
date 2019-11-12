import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

// class Login extends React.Component {
//     state = {
//         credentials: {
//             username: "",
//             password: ""
//         },
//         isLoggedIn: false
//     }


// }

function Login() {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    handleChange = e => {
        setCredentials({
            credentials: {
                ...credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                props.history.push('/protected');
            })
            .catch(error => console.log('login error', error));
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login