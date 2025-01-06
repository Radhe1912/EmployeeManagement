import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] =  useContext(AuthContext);

    return (
        <div>
            <div id='tasklist' className='bg-[#1c1c1c] p-5 mt-5 h-48 rounded'>
                <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded overflow-auto">
                    <h3 className='w-1/5 text-lg font-medium'>Employee Name</h3>
                    <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                    <h3 className='w-1/5 text-lg font-medium'>Active Task</h3>
                    <h3 className='w-1/5 text-lg font-medium'>Completed</h3>
                    <h3 className='w-1/5 text-lg font-medium'>Failed</h3>
                </div>
                <div className='h-[90%] overflow-auto'>
                    {userData.map((elem, index)=>{
                        return <div key={index} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between'>
                            <h3 className='w-1/5 text-lg font-medium'>{elem.firstname}</h3>
                            <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskSummary.newTask}</h3>
                            <h3 className='w-1/5 text-lg font-medium text-yellow-500'>{elem.taskSummary.active}</h3>
                            <h3 className='w-1/5 text-lg font-medium text-green-400'>{elem.taskSummary.completed}</h3>
                            <h3 className='w-1/5 text-lg font-medium text-red-500'>{elem.taskSummary.failed}</h3>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllTask