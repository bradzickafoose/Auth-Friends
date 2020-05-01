import React from 'react';

const Friend = ({ name, age, email }) => {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
        <h3 className="text-sm leading-5 font-medium text-gray-900">{name}</h3>
        <div className='Friend-info'>
            <div className="text-sm leading-5 text-gray-500">{age}</div>
            <div className="text-sm leading-5 text-gray-500">{email}</div>
        </div>
      </div>
    )
}

export default Friend;