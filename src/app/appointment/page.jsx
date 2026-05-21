import DoctorsList from "@/components/doctorList";

export default async function AppointmentPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/doctors`);
  const doctors = await res.json();

  const topRatedDoctors = doctors.sort((a, b) => b.rating - a.rating);

  return <DoctorsList doctors={topRatedDoctors} />;
}
