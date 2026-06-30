type Lawyer = {
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  fee: number;
  location: string;
};

interface LawyerCardProps {
  lawyer: Lawyer;
}

const LawyerCard = ({ lawyer }: LawyerCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      {/* Profile Image Placeholder */}
      <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700">
        {lawyer.name
  .split(" ")
  .slice(-2)
  .map((word) => word[0])
  .join("")}
      </div>

      <h3 className="text-center text-xl font-semibold">
        {lawyer.name}
      </h3>

      <p className="mt-2 text-center text-blue-700">
        {lawyer.specialization}
      </p>

      <div className="mt-6 space-y-2 text-gray-600">
        <p>📍 {lawyer.location}</p>
        <p>⭐ {lawyer.rating}</p>
        <p>💼 {lawyer.experience}</p>
        <p>💰 ₹{lawyer.fee} / consultation</p>
      </div>

      <button className="mt-6 w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800">
        View Profile
      </button>
    </div>
  );
};

export default LawyerCard;