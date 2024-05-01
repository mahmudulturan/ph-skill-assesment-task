import React from 'react';
import TaskCard from './TaskCard';

const OngoingTask = ({tasks}) => {
    return (
        <div className='flex-1 bg-white min-h-[79vh] px-4 py-4 rounded group'>
            <h3 className='text-xl font-medium duration-300 group-hover:text-primaryCol'>Running</h3>
            <div className='my-6 space-y-3'>
                {
                    tasks.filter(task => task.progress === "running").map(task => <TaskCard task={task} />)
                }
            </div>
        </div>
    );
};

export default OngoingTask;