import { howItWorks } from "../../data/howItWorks";

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            How LawConnect Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Get legal assistance in four simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;