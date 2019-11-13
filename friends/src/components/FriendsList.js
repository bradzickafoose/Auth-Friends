import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(response => setFriends(response.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <AddFriendForm setFriends={setFriends} />
            {friends.map(friend => (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <div className='Friend'>
                        <span>{friend.age}</span>
                        <span>{friend.email}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;