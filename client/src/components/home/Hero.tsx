const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold leading-tight text-slate-900">
            Find Trusted Lawyers
            <br />
            <span className="text-blue-700">for Every Legal Need.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with verified legal professionals, compare expertise,
            book consultations, securely share documents, and receive
            trusted legal guidance—all from one platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
              Find a Lawyer
            </button>

            <button className="rounded-lg border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50">
              Join as a Lawyer
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-gray-600">
            <span>✔ Verified Lawyers</span>
            <span>✔ Secure Document Sharing</span>
            <span>✔ Online Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;