import React from 'react';
import AddFriendForm from './AddFriendForm';
import Friend from './Friend';

const Friends = ({ friends, setFriends }) => {
    return (
        <>
            <AddFriendForm setFriends={setFriends} />
            <div className="w-full max-w-xs mx-auto grid grid-cols-1 gap-4">
            {friends.map(friend => <Friend key={friend.id} className='Friend' {...friend} />)}
            </div>
        </>
    )
}

export default Friends;