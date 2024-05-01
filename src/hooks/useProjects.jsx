"use client"
import { useProjectsStore } from '@/stores/projects-store';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useProjects = () => {
    const { projects, setProjects } = useProjectsStore(
        (state) => ({
            projects: state.projects,
            setProjects: state.setProjects
        })
    );

    const { isLoading, refetch } = useQuery({
        queryKey: ["projects"], queryFn: async () => {
            const response = await (await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/projects`)).json();
            setProjects(response.data);
            return response.data;
        }
    })
    return ({ projects, isLoading, refetch });
};

export default useProjects;