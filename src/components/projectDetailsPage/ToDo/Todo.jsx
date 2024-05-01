import React from 'react';
import TaskCard from './TaskCard';
import PendingTask from './PendingTask';
import OngoingTask from './OngoingTask';
import CompletedTask from './CompletedTask';

const Todo = ({ tasks }) => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <PendingTask tasks={tasks}/>
            <OngoingTask tasks={tasks}/>
            <CompletedTask tasks={tasks}/>
        </div>
    );
};

export default Todo;