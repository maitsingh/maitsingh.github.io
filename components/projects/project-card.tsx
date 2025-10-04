import React from "react";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <article className="bg-gray-800 text-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {project.thumbnail ? (
        <div className="h-44 w-full overflow-hidden">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
        </div>
      ) : null}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-300 mt-2">{project.tagline}</p>
        <div className="mt-4 flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 bg-blue-600 rounded text-sm font-medium hover:bg-blue-700"
          >
            View
          </a>
        </div>
      </div>
    </article>
  );
}
