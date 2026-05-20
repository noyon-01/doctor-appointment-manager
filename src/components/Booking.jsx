import { Card } from "@heroui/react";
import {
  Calendar,
  ClockArrowRotateLeft,
  PencilToSquare,
  Person,
  PersonFill,
  Smartphone,
} from "@gravity-ui/icons";
import { TrashBin } from "@gravity-ui/icons";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function BookingPage({ data }) {
  const {
    doctorName,
    patientName,
    userEmail,
    gender,
    phone,
    appointmentDate,
    appointmentTime,
  } = data;
  return (
    <Card className="rounded-xl border-t-4 border-[#00A6FB]">
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
        <button className="btn rounded-xl bg-[#00A6FB] text-white">
          <PencilToSquare /> Update
        </button>
        <button className="btn rounded-xl bg-red-500 text-white">
          <TrashBin /> Delete
        </button>
      </div>
    </Card>
  );
}
