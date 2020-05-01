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
      <div className="w-full max-w-xs mx-auto mt-6 pt-4">
        <h2 class=" text-center text-3xl leading-9 font-extrabold text-gray-900">Add a Friend
        </h2>
        <form onSubmit={onSubmit} className="px-8 pt-6 pb-6 mb-4">
        <div class="mb-4">
            <input
                type='text'
                name='name'
                value={friend.name}
                placeholder='Name'
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div class="mb-4">
            <input
                type='text'
                name='age'
                value={friend.age}
                placeholder='Age'
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
      </div>
      <div class="mb-4">
            <input
                type='email'
                name='email'
                value={friend.email}
                placeholder='Email'
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
    </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>Add Friend</button>
        </form>
        </div>
    )
}

export default AddFriendForm;