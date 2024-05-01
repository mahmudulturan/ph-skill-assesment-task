import React from 'react';
import TaskCard from './TaskCard';

const Todo = ({ tasks }) => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <div className='flex-1 bg-white min-h-[79vh] px-4 py-4 rounded group'>
                <h3 className='text-xl font-medium duration-300 group-hover:text-primaryCol'>Pending</h3>
                <div className='my-6 space-y-3'>
                    {
                        tasks.filter(task => task.progress === "pending").map(task => <TaskCard task={task} />)
                    }
                </div>
            </div>
            <div className='flex-1 bg-white min-h-[79vh] px-4 py-4 rounded group'>
                <h3 className='text-xl font-medium duration-300 group-hover:text-primaryCol'>Running</h3>
                <div className='my-6 space-y-3'>
                    {
                        tasks.filter(task => task.progress === "running").map(task => <TaskCard task={task} />)
                    }
                </div>
            </div>
            <div className='flex-1 bg-white min-h-[79vh] px-4 py-4 rounded group'>
                <h3 className='text-xl font-medium duration-300 group-hover:text-primaryCol'>Completed</h3>
                <div className='my-6 space-y-3'>
                    {
                        tasks.filter(task => task.progress === "completed").map(task => <TaskCard task={task} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Todo;