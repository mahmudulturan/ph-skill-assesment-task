import ProjectDetails from '@/components/projectDetailsPage/ProjectDetails/ProjectDetails';
import React from 'react';

const page = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <ProjectDetails id={id} />
        </div>
    );
};

export default page;