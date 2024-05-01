import React from 'react';
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';

const CompletedTask = ({ tasks }) => {


    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => changeItemProgress(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const changeItemProgress = (item) => {
        console.log(item);
    }

    return (
        <div ref={drop} className={`flex-1 ${isOver ? "bg-primaryCol/40" : "bg-white"} min-h-[79vh] px-4 py-4 rounded group`}>
            <h3 className='text-xl font-medium duration-300 group-hover:text-primaryCol'>Completed</h3>
            <div className='my-6 space-y-3'>
                {
                    tasks?.filter(task => task.progress === "completed").map(task => <TaskCard task={task} />)
                }

            </div>
        </div>
    );
};

export default CompletedTask;