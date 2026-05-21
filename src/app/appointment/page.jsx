import DoctorCard from "@/components/DoctorCard";

export const metadata = {
  title: "DocAppoint - All Appointments | Manage Your Doctor Bookings Online",
  description: "View and manage all your doctor appointments in one place. Track upcoming visits, reschedule appointments, and stay organized with your healthcare schedule.",
};

export default async function AppointmentPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/doctors`);
  const doctors = await res.json();

  const topRatedDoctors = [...doctors].sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-100">
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">All Appointments</h1>
          <p className="text-gray-500">Find the right doctor for you</p>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-10">
          {topRatedDoctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
