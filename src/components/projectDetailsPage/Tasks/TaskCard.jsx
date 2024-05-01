"use client"
import React from 'react';
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { BiSolidDetail } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { Tooltip } from 'antd';
import { useDrag } from 'react-dnd';
import TasksDetailsModal from '../TaskDetailsModal/TaskDetailsModal';

const TaskCard = ({ task }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { task: task },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div ref={drag} className={`${isDragging ? "bg-white/65" : "bg-[#F1F5F9]"}  px-2 py-2 rounded-md cursor-pointer`}>
            <h5 className='text-lg font-medium'>
                {task?.description}
            </h5>
            <div className='flex flex-col items-start justify-between'>
                <p className='mt-1 flex-1'>Deadline: <span className='font-medium'>{task?.deadline}</span></p>
                <p className='mt-1 flex-1'>Status: <span className='font-medium'>{task?.progress}</span></p>
            </div>
            <div className='flex items-center justify-center gap-3 my-3'>
                <TasksDetailsModal task={task} />
                <Tooltip placement="top" title={"Show Details"} >
                    <BiSolidDetail className='text-xl' />
                </Tooltip>
                <Tooltip placement="top" title={"Change Status"} >
                    <FaArrowRight className='text-xl' />
                </Tooltip>
                <Tooltip placement="top" title={"Edit Task"} >
                    <MdModeEditOutline className='text-xl' />
                </Tooltip>
                <Tooltip placement="top" title={"Delete Task"} >
                    <MdDelete className='text-xl' />
                </Tooltip>
            </div>
        </div>
    );
};

export default TaskCard;