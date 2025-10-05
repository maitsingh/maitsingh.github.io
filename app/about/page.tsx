import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About</h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          I map inequality. My projects examine voter clustering in North Carolina, informal labor in India, college tuition determinants, and post-pandemic commute patterns—asking how geography shapes who gets access to political power, economic opportunity, and public goods.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mt-6">
          I work with spatial data (GIS, regression models, interactive maps) and critical theory (postcolonial studies, labor geography). The quantitative work reveals patterns; the theoretical work asks why those patterns exist and what measuring them does politically. Some projects are statistical analyses. Others are essays interrogating how the state counts informal workers or how colonial governance structures persist in modern India.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mt-6">
          I&apos;m interested in what data shows and what it hides—whether state surveys make workers legible for exploitation, tuition models obscure elite institution pricing, or maps naturalize partisan segregation.
        </p>
      </div>
    </main>
  );
}
