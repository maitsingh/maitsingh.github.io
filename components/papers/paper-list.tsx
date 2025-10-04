import React from "react";

export default function PaperList({ papers }: { papers: any[] }) {
  return (
    <div className="space-y-4">
      {papers.map((p) => (
        <div key={p.link} className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg font-medium"
            >
              {p.title}
            </a>
            {p.year && <span className="ml-2 text-sm text-gray-500">({p.year})</span>}
            {p.summary && <div className="text-sm text-gray-600 mt-1">{p.summary}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
