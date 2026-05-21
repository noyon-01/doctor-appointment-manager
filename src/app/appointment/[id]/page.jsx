import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { MdMoreTime } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa6";
import { IoMdLocate } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { BookingModal } from "@/components/BookingModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "DocAppoint - Doctor Profile | View Doctor Details & Book Appointment",
  description: "Explore doctor profiles, qualifications, specialties, experience, and availability. Book your appointment instantly with trusted healthcare professionals.",
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

  const {
    image,
    name,
    specialty,
    description,
    location,
    experience,
    fee,
    rating,
    availability,
    hospital,
  } = doctor;

  return (
    <div className="bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-5 flex justify-center items-center gap-10">
        <div>
          <Image
            src={image}
            alt={name}
            width={600}
            height={600}
            className="object-cover w-100 h-120 rounded-2xl"
          />
        </div>

        <div className="">
          <div className="badge badge-soft badge-info mb-3">{specialty}</div>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="flex items-center gap-1 font-semibold mt-1">
            <span className="text-yellow-500">
              <FaRegStar />
            </span>
            {rating} / 5.0
          </p>
          <p className="my-3 text-[16px] text-gray-500">{description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4 px-5 py-2 rounded-xl border-1 border-[#00A6FB]">
              <div className="text-3xl text-[#00A6FB] bg-gray-200 p-2 rounded-xl">
                <MdMoreTime />
              </div>
              <div>
                <p className="text-gray-500">Experience</p>
                <p className="font-bold">{experience}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-5 py-2 rounded-xl border-1 border-[#00A6FB]">
              <div className="text-3xl text-[#00A6FB] bg-gray-200 p-2 rounded-xl">
                <FaRegHospital />
              </div>
              <div>
                <p className="text-gray-500">Hospital</p>
                <p className="font-bold">{hospital}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-5 py-2 rounded-xl border-1 border-[#00A6FB]">
              <div className="text-3xl text-[#00A6FB] bg-gray-200 p-2 rounded-xl">
                <IoMdLocate />
              </div>
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-bold">{location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-5 py-2 rounded-xl border-1 border-[#00A6FB]">
              <div className="text-3xl text-[#00A6FB] bg-gray-200 p-2 rounded-xl">
                <FaCalendarCheck />
              </div>
              <div>
                <p className="text-gray-500">Consultation Fee</p>
                <p className="font-bold">{fee}</p>
              </div>
            </div>
          </div>

          <p className="font-semibold my-3">Availability</p>
          <div className="flex items-center gap-2">
            {availability?.map((time, index) => (
              <div key={index}>
                <div className="badge badge-soft badge-info mb-3">{time}</div>
              </div>
            ))}
          </div>
          <BookingModal doctor={doctor} />
        </div>
      </div>
    </div>
  );
}
