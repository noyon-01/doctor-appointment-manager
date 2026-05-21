import DoctorCard from "./DoctorCard";

export default async function () {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/doctors`);
  const doctors = await res.json();
  const topRatedDoctors = [...doctors]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-100">
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center">
          <p className="text-[#00A6FB] text-xl font-bold mb-4">Our Team</p>
          <h1 className="text-5xl font-bold">Top Rated Doctor</h1>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-10 px-10">
          {topRatedDoctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
