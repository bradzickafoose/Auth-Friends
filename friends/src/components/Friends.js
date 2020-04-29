import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';
import Friend from './Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(response => setFriends(response.data))
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <h2>Friends</h2>
            <AddFriendForm setFriends={setFriends} />
            {friends.map(friend => <Friend key={friend.id} className='Friend' {...friend} />)}
        </>
    )
}

export default Friends;