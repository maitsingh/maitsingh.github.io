import React from "react";
import PaperList from "@/components/papers/paper-list";
import ProjectCard from "@/components/projects/project-card";
import { papers, projects } from "@/app/utils/projectList";

export default function ProjectsIndexPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Work</h1>
          <p className="text-gray-600 mt-2">Papers and projects spanning spatial analysis, policy, and qualitative research.</p>
        </header>

        {/* Papers (simple list) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Papers</h2>
          <PaperList papers={papers} />
        </section>

        {/* Projects (cards) */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.link} project={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
