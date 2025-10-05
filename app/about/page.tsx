import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About</h1>

        <p className="text-gray-500 leading-relaxed text-lg">
          I study how power and inequality operate across space, using GIS, econometrics, and statistical modeling to examine access to political representation, labor markets, and public services.
        </p>

        <p className="text-gray-500 leading-relaxed text-lg mt-6">
          I make social systems visible while questioning the terms of their visibility—whether state surveys render informal workers legible for exploitation, electoral maps naturalize partisan clustering, or institutional metrics obscure structural inequities.
        </p>

        <p className="text-gray-500 leading-relaxed text-lg mt-6">
          I work with quantitative methods (spatial econometrics, predictive models) and critical theory (postcolonial studies, labor geography). The statistical analyses reveal patterns; the theoretical work asks why those patterns exist and what measuring them does politically. Some projects are data-driven inquiries. Others are essays interrogating how the state audits informality in labor or governance.
        </p>
      </div>
    </main>
  );
}
