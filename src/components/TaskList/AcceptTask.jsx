import React from 'react'

const AcceptTask = ({ elem }) => {
    return (
        <div>
            <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 px-3 py-1 rounded'>{elem.category}</h3>
                    <h4 className='text-sm'>{elem.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{elem.title}</h2>
                <p className='text-sm mt-3'>{elem.description}</p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask