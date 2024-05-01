"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { createKey } from 'next/dist/shared/lib/router/router';

const Projects = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["projects"], queryFn: async () => {
            const response = await (await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/projects`)).json();
            return response.data;
        }
    })
    console.log(data)
    return (
        <div>
            Projects
        </div>
    );
};

export default Projects;