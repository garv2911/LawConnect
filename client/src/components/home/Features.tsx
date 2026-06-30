import { features } from "../../data/feature";

const Features = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose LawConnect?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Making legal assistance accessible, secure, and transparent for
            everyone.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-3">
                  <Icon className="h-7 w-7 text-blue-700" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;