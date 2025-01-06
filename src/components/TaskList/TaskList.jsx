import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-stretch items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10'>
            {data.tasks.map((elem,index)=>{
                if(elem.active){
                    return <AcceptTask key={index} elem={elem} />
                }
                if(elem.newTask){
                    return <NewTask key={index} elem={elem} />
                }
                if(elem.completed){
                    return <CompleteTask key={index} elem={elem} />
                }
                if(elem.failed){
                    return <FailedTask key={index} elem={elem} />
                }
            })}
        </div>
    )
}

export default TaskList