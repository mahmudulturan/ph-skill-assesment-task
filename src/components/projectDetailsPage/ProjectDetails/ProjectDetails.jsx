"use client"
import useProjectById from '@/hooks/useProjectById';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TeamMembers from '../TeamMembers/TeamMembers';

const ProjectDetails = ({ id }) => {
    const { project, isLoading } = useProjectById({ id });

    if (isLoading) {
        return;
    }
    return (
        <div>
            <div className='flex justify-between'>
                <div className='my-4'>
                    <h2 className='text-3xl font-semibold uppercase'>{project?.project_name}</h2>
                    <p className='max-w-2xl'>{project?.project_description}</p>
                </div>
                <TeamMembers />
            </div>
        </div>
    );
};

export default ProjectDetails;