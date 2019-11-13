import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
            {friends.map(friend => (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;