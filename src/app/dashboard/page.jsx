import BookingPage from "@/components/Booking";
import ProfilePage from "@/components/Profile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

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

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-15 pb-28">
      <div className="max-w-7xl h-[50vh] mx-auto">
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
            <div className="grid grid-cols-3 gap-5">
              {data.map((d) => (
                <div key={d._id}>
                  <BookingPage data={d} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <ProfilePage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
