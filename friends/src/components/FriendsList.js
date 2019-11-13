import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(response => setFriends(response.data))
            .catch(err => console.error(err))
    })

    return (
        <div>
            <AddFriendForm />
            {friends.map(friend => (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;