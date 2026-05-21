import DoctorDetailsClient from "@/components/DoctorDetailsClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "DocAppoint - Doctor Profile | View Doctor Details & Book Appointment",
  description:
    "Explore doctor profiles, qualifications, specialties, experience, and availability.",
};

export default async function DoctorDetailsPage({ params }) {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/doctors/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const doctor = await res.json();

  return <DoctorDetailsClient doctor={doctor} />;
}
