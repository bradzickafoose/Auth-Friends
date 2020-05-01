import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const AddFriendForm = props => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', friend)
            .then(response => props.setFriends(response.data))
            .catch(error => console.log('login error', error));

        setFriend({
            ...friend,
            name: '',
            age: '',
            email: ''
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                name='name'
                value={friend.name}
                placeholder='Name'
                onChange={handleChange}
            />
            <input
                type='text'
                name='age'
                value={friend.age}
                placeholder='Age'
                onChange={handleChange}
            />
            <input
                type='text'
                name='email'
                value={friend.email}
                placeholder='email'
                onChange={handleChange}
            />
            <button type='submit'>Add Friend</button>
        </form>
    )
}

export default AddFriendForm;