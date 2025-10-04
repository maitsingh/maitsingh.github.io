import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About</h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          I study the spatial dimensions of political economy, examining how geography mediates
          access to political representation, economic opportunity, and public goods. My work
          integrates GIS, spatial econometrics, and regression modeling with critical engagement
          of ethnography and theory — analyzing how data both reveals and reproduces structures of
          power.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mt-6">
          I approach research as both technical inquiry and epistemological critique. Across
          projects, I ask not only what patterns exist but how measurement practices shape
          political possibilities: whether state surveys render informal workers eligible for
          exploitation, electoral maps naturalize partisan clustering, or institutional metrics
          obscure structural inequities. I bridge computational methods and critical theory to
          make social systems visible while questioning the terms of their visibility.
        </p>
      </div>
    </main>
  );
}
