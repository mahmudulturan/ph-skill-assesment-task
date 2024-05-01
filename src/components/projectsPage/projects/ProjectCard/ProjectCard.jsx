import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <Link href={`/projects/${project._id}`}>
            <div className='bg-white px-4 py-6 rounded flex flex-col  min-h-44'>
                <h1 className='text-xl font-semibold uppercase mb-3'>{project.project_name}</h1>
                <p className='flex-1'>{project.project_description}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;