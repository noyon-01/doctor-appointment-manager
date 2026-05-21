"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DoctorCard from "@/components/DoctorCard";
import { SearchField } from "@heroui/react";

export default function DoctorsList({ doctors }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-8">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold mb-4">All Appointments</h1>
          <p className="text-gray-500">Find the right doctor for you</p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="max-w-80 md:max-w-xl mx-auto my-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SearchField>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                value={searchValue}
                onChange={handleSearchValue}
                placeholder="Search by doctor name..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </motion.div>

        {/* Doctor Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-10 lg:px-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {filteredDoctors.map((doctor) => (
            <motion.div
              key={doctor._id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredDoctors.length === 0 && (
          <motion.p
            className="text-center text-gray-500 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No doctor found 😔
          </motion.p>
        )}
      </div>
    </section>
  );
}
