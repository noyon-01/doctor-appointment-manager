"use client";

import { motion } from "framer-motion";
import DoctorCard from "./DoctorCard";

export default function AnimatedDoctorSection({ doctors }) {
  return (
    <section className="bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-100">
      <div className="max-w-7xl mx-auto py-20">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00A6FB] text-xl font-bold mb-4">Our Team</p>

          <h1 className="text-5xl font-bold">Top Rated Doctor</h1>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor._id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
