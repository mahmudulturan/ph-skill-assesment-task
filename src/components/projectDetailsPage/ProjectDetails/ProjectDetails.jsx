"use client"
import useProjectById from '@/hooks/useProjectById';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TeamMembers from '../TeamMembers/TeamMembers';
import Todo from '../ToDo/Todo';

const ProjectDetails = ({ id }) => {
    const { project, isLoading } = useProjectById({ id });

    if (isLoading) {
        return;
    }
    return (
        <div>
            <div className='flex justify-between gap-6'>
                <div className='w-full flex-col flex '>
                    <div className='my-4'>
                        <h2 className='text-3xl font-semibold uppercase'>{project?.project_name}</h2>
                        <p className='max-w-2xl'>{project?.project_description}</p>
                    </div>
                    <div className='flex-1 h-full'>
                        <Todo />
                    </div>
                </div>
                <TeamMembers />
            </div>
        </div>
    );
};

export default ProjectDetails;