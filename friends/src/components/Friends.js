import React from 'react';
import AddFriendForm from './AddFriendForm';
import Friend from './Friend';

const Friends = ({ friends, setFriends }) => {
    return (
        <>
            <h2>Friends</h2>
            <AddFriendForm setFriends={setFriends} />
            {friends.map(friend => <Friend key={friend.id} className='Friend' {...friend} />)}
        </>
    )
}

export default Friends;