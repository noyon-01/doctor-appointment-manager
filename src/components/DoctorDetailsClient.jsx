"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegStar, FaCalendarCheck } from "react-icons/fa";
import { MdMoreTime } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa6";
import { IoMdLocate } from "react-icons/io";
import { BookingModal } from "@/components/BookingModal";

export default function DoctorDetailsClient({ doctor }) {
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
    <section className="bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-100 py-10">
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-2xl p-5 flex flex-col md:flex-row justify-center items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src={image}
            alt={name}
            width={600}
            height={600}
            className="object-cover w-110 md:w-150 lg:w-100 md:h-150 lg:h-120 rounded-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge badge-soft badge-info mb-3">{specialty}</div>

          <h1 className="text-4xl font-bold">{name}</h1>

          <p className="flex items-center gap-1 font-semibold mt-1">
            <span className="text-yellow-500">
              <FaRegStar />
            </span>
            {rating} / 5.0
          </p>

          <p className="my-3 text-gray-500">{description}</p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              {
                icon: <MdMoreTime />,
                label: "Experience",
                value: experience,
              },
              {
                icon: <FaRegHospital />,
                label: "Hospital",
                value: hospital,
              },
              {
                icon: <IoMdLocate />,
                label: "Location",
                value: location,
              },
              {
                icon: <FaCalendarCheck />,
                label: "Consultation Fee",
                value: fee,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 px-5 py-2 rounded-xl border border-[#00A6FB]"
              >
                <div className="text-3xl text-[#00A6FB] bg-gray-200 p-2 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500">{item.label}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Availability */}
          <p className="font-semibold my-3">Availability</p>

          <div className="flex flex-wrap gap-2">
            {availability?.map((time, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="badge badge-soft badge-info"
              >
                {time}
              </motion.div>
            ))}
          </div>

          <div className="mt-5">
            <BookingModal doctor={doctor} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
