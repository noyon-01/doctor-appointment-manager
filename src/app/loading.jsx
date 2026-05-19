"use client";

import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";

export default function Loading() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-teal-100 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
          }}
        >
          <div className="w-32 h-32 rounded-full border-4 border-teal-200 border-t-teal-500 animate-spin"></div>

          <div className="absolute w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
            <Stethoscope className="w-10 h-10 text-teal-500" />
          </div>
        </motion.div>

        <motion.h2
          className="mt-8 text-3xl font-bold text-slate-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Loading...
        </motion.h2>

        <motion.p
          className="mt-2 text-slate-500 text-lg"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
        >
          Preparing your appointment experience
        </motion.p>

        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-3 h-3 bg-teal-500 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
