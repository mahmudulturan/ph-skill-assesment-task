"use client"
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useProjectsStore } from '@/stores/projects-store';
import ProjectCard from '../ProjectCard/ProjectCard';
import { FiPlus } from "react-icons/fi";

const Projects = () => {
    const { projects, setProjects } = useProjectsStore(
        (state) => ({
            projects: state.projects,
            setProjects: state.setProjects
        })
    );
    const { data, isLoading } = useQuery({
        queryKey: ["projects"], queryFn: async () => {
            const response = await (await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/projects`)).json();
            setProjects(response.data);
            return response.data;
        }
    })
    return (
        <div>
            Projects
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6 gap-6'>
                <div className='bg-white px-4 py-6 rounded flex flex-col items-center justify-center gap-3  min-h-44 cursor-pointer group'>
                    <FiPlus className='w-10 h-10 text-primaryCol' />
                    <h1 className='text-xl font-semibold uppercase mb-3 group-hover:text-primaryCol duration-300'>Add New Project</h1>
                </div>
                {
                    projects?.map(project => <ProjectCard key={project._id} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;