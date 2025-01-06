import React from 'react'

const Header = (props) => {
    // console.log(data);
    
    function logOutUser(){
        localStorage.setItem('loggedInUser','');
        props.changeUser('');
        // window.location.reload();
    }

    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{user.role=="admin"?"admin":"employee"}</span> 👋🏻</h1>
            <button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-5 py-2 mb-5 text-white rounded'>Log out</button>
        </div>
    )
}

export default Header