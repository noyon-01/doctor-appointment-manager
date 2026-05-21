import BookingPage from "@/components/Booking";
import ProfilePage from "@/components/Profile";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "DocAppoint - User Dashboard | Manage Profile & Appointments",
  description:
    "Access your personal dashboard to manage your profile, view appointments, update booking details, and stay connected with your healthcare services.",
};

export default async function DeshboardPage({ searchParams }) {
  const params = await searchParams;
  const activeTab = params?.tab || "booking";

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-5 py-10 lg:pt-15 lg:pb-28">
      <div className="max-w-7xl md:h-[50vh] mx-auto">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <div className="flex items-center gap-2 p-2 rounded-xl shadow w-70 bg-white mt-4">
          <Link
            href="?tab=booking"
            className={`px-6 py-2 rounded-xl font-semibold transition cursor-pointer ${
              activeTab === "booking"
                ? "bg-[#00A6FB] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            My Booking
          </Link>

          <Link
            href="?tab=profile"
            className={`px-6 py-2 rounded-xl font-semibold transition cursor-pointer ${
              activeTab === "profile"
                ? "bg-[#00A6FB] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            My Profile
          </Link>
        </div>

        <div className="mt-8">
          {activeTab === "booking" ? (
            Array.isArray(data) && data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map((d) => (
                  <div key={d._id}>
                    <BookingPage data={d} />
                  </div>
                ))}
              </div>
            ) : (
              <Card className="text-xl border-t-4 border-[#00A6FB] w-110 md:w-2xl font-bold text-center text-gray-500 py-20 rounded-xl mt-5 md:mt-10">
                <h1>
                  You haven't Booked any{" "}
                  <span className="text-[#00A6FB]">Appointment</span> yet.
                </h1>
              </Card>
            )
          ) : (
            <ProfilePage />
          )}
        </div>
      </div>
    </div>
  );
}
