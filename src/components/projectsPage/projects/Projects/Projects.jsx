"use client"
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import AddProjectModal from '../../AddProjectModal/AddProjectModal';
import useProjects from '@/hooks/useProjects';

const Projects = () => {
    const { projects } = useProjects();
    return (
        <div>
            Projects
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6 gap-6'>
                <AddProjectModal />
                {
                    projects?.map(project => <ProjectCard key={project._id} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;