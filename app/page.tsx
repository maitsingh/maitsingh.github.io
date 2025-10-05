import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Maitreyee Singh
      </h1>

      <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
       I study spatial dimensions of political economy, combining econometrics, predictive modeling, and GIS with critical theory. 
        I consider both what patterns exist and how measurement practices themselves shape political possibilities. Data both 
        reveals and reproduces structures of power; I am curious about how this happens.
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          href="/projects"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Work
        </Link>

        <Link
          href="/about"
          className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
        >
          About Me
        </Link>
      </div>
    </main>
  );
}
