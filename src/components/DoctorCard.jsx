import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdMoreTime } from "react-icons/md";

export default function DoctorCard({doctor}) {
  const {_id, image, name, specialty, description, location, experience, fee, rating } =
    doctor;

  return (
    <div className="bg-white rounded-xl p-4 shadow-xl shadow-[#00A6FB]/20">
      <div className="relative">
        <Image
        className="w-100 h-70 object-cover rounded-tl-xl rounded-tr-xl"
        src={image}
        alt="doctor-image"
        height={500}
        width={500}
      />
      <p className="absolute top-3 right-4 z-20 bg-white px-3 rounded-2xl flex items-center gap-1"><span className="text-yellow-500"><FaRegStar /></span>{rating}</p>
      </div>
      <div className="bg-white rounded-bl-xl rounded-br-xl mt-5">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-[16px] font-semibold">{specialty}</p>
        <p className="text-gray-500 line-clamp-2 my-3">{description}</p>
        <p className="flex items-center gap-2">
          <span className="mt-1">
            <FaLocationCrosshairs />
          </span>
          {location}
        </p>
        <p className="flex items-center gap-2">
          <span>
            <MdMoreTime />
          </span>
          {experience}
        </p>
        <div className="divider before:bg-gray-500 after:bg-gray-500"></div>
        <p>Consultation</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">৳ {fee}</p>
          <Link href={`/appointment/${_id}`}><button className="btn rounded-xl bg-[#00A6FB] text-white">View Details</button></Link>
        </div>
      </div>
    </div>
  );
}
