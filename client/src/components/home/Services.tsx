import { services } from "../../data/services";

const Services = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Popular Legal Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Explore a wide range of legal services offered by experienced and
            verified lawyers.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-3">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;