import React from 'react'
import Header from '../SubComponents/Header'
import CreateTask from '../SubComponents/CreateTask'
import AllTask from '../SubComponents/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser} />
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard