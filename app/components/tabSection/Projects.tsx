"use client";
import { projects } from "@/app/utils/projectList";  // <-- use 'projects' not 'ProjectList'
import { ProjectType } from "@/app/types";
import { Project } from "../Project";

export const Projects = () => {
  return (
    <main className="flex flex-col gap-20">
      {projects.map((project: ProjectType) => (
        <Project
          key={`project-item-${project.title}`}
          {...project}
        />
      ))}
    </main>
  );
};
