import { Card } from "@heroui/react";
import Image from "next/image";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ServiceSection() {
  return (
    <div className="bg-gradient-to-r from-sky-50 via-slate-50 to-teal-100">
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center">
          <p className="text-[#00A6FB] text-xl font-bold mb-4">Our Service</p>
          <h1 className="text-5xl font-bold">Our Madical Service</h1>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <Card className="rounded-xl">
            <Image
              className="w-96"
              src={service1}
              alt="service-1"
              height={200}
              width={200}
            />
            <h1 className="text-2xl font-bold">Online Monitoring</h1>
            <p className="text-gray-500 line-clamp-2">
              Our online monitoring service allows doctors to track patients’
              health conditions remotely in real-time, ensuring continuous care
              and faster medical response whenever needed.
            </p>
            <Link className="flex items-center gap-1 text-[#00A6FB]" href={"/"}>
              Read More{" "}
              <span className="mt-1">
                <FaLongArrowAltRight />
              </span>
            </Link>
          </Card>

          <Card className="rounded-xl">
            <Image
              className="w-96"
              src={service2}
              alt="service-1"
              height={200}
              width={200}
            />
            <h1 className="text-2xl font-bold">Holter Heart Surgery</h1>
            <p className="text-gray-500 line-clamp-2">
              Advanced Holter heart monitoring and surgical support services
              designed to diagnose and treat complex cardiac conditions with
              precision and expert medical care.
            </p>
            <Link className="flex items-center gap-1 text-[#00A6FB]" href={"/"}>
              Read More{" "}
              <span className="mt-1">
                <FaLongArrowAltRight />
              </span>
            </Link>
          </Card>

          <Card className="rounded-xl">
            <Image
              className="w-96"
              src={service3}
              alt="service-1"
              height={200}
              width={200}
            />
            <h1 className="text-2xl font-bold">Diagnosis & Research</h1>
            <p className="text-gray-500 line-clamp-2">
              We provide accurate diagnostic services and advanced medical
              research support to identify health issues early and deliver
              personalized treatment solutions.
            </p>
            <Link className="flex items-center gap-1 text-[#00A6FB]" href={"/"}>
              Read More{" "}
              <span className="mt-1">
                <FaLongArrowAltRight />
              </span>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
