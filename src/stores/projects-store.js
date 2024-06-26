import { create } from "zustand";

export const useProjectsStore = create((set) => ({
    projects: [],
    setProjects: (projects) => {
        set((state) => ({
            projects: projects
        }))
    },
    changeTaskProgress: (task) => {
        set((state) => ({
            projects: task
        }))
    },
}))