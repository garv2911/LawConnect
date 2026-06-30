import LawyerCard from "../lawyer/LawyerCard";
import { lawyers } from "../../data/lawyers";

const FeaturedLawyers = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Featured Lawyers
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Connect with experienced legal professionals across India.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((lawyer) => (
            <LawyerCard
              key={lawyer.id}
              lawyer={lawyer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLawyers;