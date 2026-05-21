"use client";

import { useState } from "react";
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
    <div className="bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">All Appointments</h1>
          <p className="text-gray-500">Find the right doctor for you</p>
        </div>

        <SearchField className="max-w-80 md:max-w-xl mx-auto my-5">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-10 lg:px-0">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
