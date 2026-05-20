"use client"

import { Card } from "@heroui/react";
import {
  Calendar,
  ClockArrowRotateLeft,
  Person,
  PersonFill,
  Smartphone,
} from "@gravity-ui/icons";
import { TrashBin } from "@gravity-ui/icons";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { UpdatedBooking } from "./UpdatedBooking";

export default function BookingPage({ data }) {
  const {
    _id,
    doctorName,
    patientName,
    userEmail,
    gender,
    phone,
    appointmentDate,
    appointmentTime,
  } = data;

  const handleDeleteBooked = async () => {
    const res = await fetch(`http://localhost:5000/booking/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    window.location.reload();
  };

  return (
    <Card className="rounded-xl border-t-4 border-[#00A6FB] p-5">
      <h1 className="text-2xl font-bold text-[#00A6FB]">{doctorName}</h1>
      <p className="text-gray-500 flex items-center gap-1 text-lg">
        <PersonFill /> Patient Name:{" "}
        <span className="font-bold text-gray-600">{patientName}</span>
      </p>
      <p className="text-gray-500 flex items-center gap-1">
        <MdOutlineAlternateEmail /> Patient Email:{" "}
        <span className="font-bold text-gray-600">{userEmail}</span>
      </p>

      <div className="flex justify-between items-center">
        <p className="text-gray-500 flex items-center gap-1">
          <Smartphone /> Phone:{" "}
          <span className="font-bold text-gray-600">{phone}</span>
        </p>
        <p className="text-gray-500 flex items-center gap-1">
          <Person /> Gender:{" "}
          <span className="font-bold text-gray-600">{gender}</span>
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-500 flex items-center gap-1">
          <Calendar /> Date:{" "}
          <span className="font-bold text-gray-600">{appointmentDate}</span>
        </p>
        <p className="text-gray-500 flex items-center gap-1">
          <ClockArrowRotateLeft /> Time:{" "}
          <span className="font-bold text-gray-600">{appointmentTime}</span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <UpdatedBooking bookingData={data} />
        <button
          onClick={handleDeleteBooked}
          className="btn rounded-xl bg-red-500 text-white"
        >
          <TrashBin /> Delete
        </button>
      </div>
    </Card>
  );
}
