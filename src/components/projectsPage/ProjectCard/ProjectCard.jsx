import Link from 'next/link';
import React from 'react';
import DeleteProjectModal from '../DeleteProjectModal/DeleteProjectModal';
import UpdateProjectModal from '../UpdateProjectModal/UpdateProjectModal';

const ProjectCard = ({ project }) => {
    return (
        <div className='relative overflow-hidden group'>
            <Link href={`/projects/project-details/${project._id}`}>
                <div className='bg-white px-4 py-6 rounded flex flex-col  min-h-44 relative group overflow-hidden duration-300'>
                    <h1 className='text-xl font-semibold uppercase mb-3'>{project.project_name}</h1>
                    <p className='flex-1'>{project.project_description}</p>

                </div>
            </Link>
            <div className='flex items-center justify-end gap-2 absolute top-0 right-2 py-2 md:-translate-y-full md:group-hover:translate-y-0 transition-all duration-300'>
                <UpdateProjectModal project={project}/>
                <DeleteProjectModal id={project?._id} />
            </div>
        </div>
    );
};

export default ProjectCard;