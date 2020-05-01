import React from 'react';

const Friend = ({ name, age, email }) => {
    return (
      <>
        <h3>{name}</h3>
        <div className='Friend-info'>
            <span>{age}</span>
            <span>{email}</span>
        </div>
      </>
    )
}

export default Friend;