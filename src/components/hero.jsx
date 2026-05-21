"use client";

import Image from "next/image";
import receptionist from "@/assets/receptionist.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-teal-100">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center py-10 md:py-35 md:px-10">
        {/* Left Content */}
        <motion.div
          className="space-y-3 md:space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[#00A6FB] md:border-l-2 border-[#00A6FB] pl-3 text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to DocAppoint
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We Are Committed <br /> To Your Health
          </motion.h1>

          <motion.p
            className="text-[16px] text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            It is a established fact that a reader will be distracted by the
            <br />
            content of a page when looking at this layout.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start items-center gap-2 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-[#00A6FB] text-white text-[16px]"
              >
                Browse Doctors
              </motion.button>
            </Link>

            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn border-[#00A6FB] hover:bg-[#00A6FB] hover:text-white text-black text-[16px]"
              >
                My Bookings
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            className="w-80 lg:w-120"
            src={receptionist}
            alt="doctor"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
}
