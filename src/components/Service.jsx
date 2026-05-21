// import { Card } from "@heroui/react";
// import Image from "next/image";
// import service1 from "@/assets/service-1.jpg";
// import service2 from "@/assets/service-2.jpg";
// import service3 from "@/assets/service-3.jpg";
// import Link from "next/link";
// import { FaLongArrowAltRight } from "react-icons/fa";

// export default function ServiceSection() {
//   return (
//     <div className="bg-gradient-to-r from-sky-50 via-slate-50 to-teal-100">
//       <div className="max-w-7xl mx-auto py-20 px-10 lg:px-0">
//         <div className="text-center">
//           <p className="text-[#00A6FB] text-xl font-bold mb-4">Our Service</p>
//           <h1 className="text-5xl font-bold">Our Madical Service</h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           <Card className="rounded-xl">
//             <Image
//               className="w-96"
//               src={service1}
//               alt="service-1"
//               height={200}
//               width={200}
//             />
//             <h1 className="text-2xl font-bold">Online Monitoring</h1>
//             <p className="text-gray-500 line-clamp-2">
//               Our online monitoring service allows doctors to track patients’
//               health conditions remotely in real-time, ensuring continuous care
//               and faster medical response whenever needed.
//             </p>
//             <Link className="flex items-center gap-1 text-[#00A6FB]" href={"/"}>
//               Read More{" "}
//               <span className="mt-1">
//                 <FaLongArrowAltRight />
//               </span>
//             </Link>
//           </Card>

//           <Card className="rounded-xl">
//             <Image
//               className="w-96"
//               src={service2}
//               alt="service-1"
//               height={200}
//               width={200}
//             />
//             <h1 className="text-2xl font-bold">Holter Heart Surgery</h1>
//             <p className="text-gray-500 line-clamp-2">
//               Advanced Holter heart monitoring and surgical support services
//               designed to diagnose and treat complex cardiac conditions with
//               precision and expert medical care.
//             </p>
//             <Link className="flex items-center gap-1 text-[#00A6FB]" href={"/"}>
//               Read More{" "}
//               <span className="mt-1">
//                 <FaLongArrowAltRight />
//               </span>
//             </Link>
//           </Card>

//           <Card className="rounded-xl">
//             <Image
//               className="w-96"
//               src={service3}
//               alt="service-1"
//               height={200}
//               width={200}
//             />
//             <h1 className="text-2xl font-bold">Diagnosis & Research</h1>
//             <p className="text-gray-500 line-clamp-2">
//               We provide accurate diagnostic services and advanced medical
//               research support to identify health issues early and deliver
//               personalized treatment solutions.
//             </p>
//             <Link className="flex items-center gap-1 text-[#00A6FB]" href={"/"}>
//               Read More{" "}
//               <span className="mt-1">
//                 <FaLongArrowAltRight />
//               </span>
//             </Link>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

export default function ServiceSection() {
  const services = [
    {
      image: service1,
      title: "Online Monitoring",
      description:
        "Our online monitoring service allows doctors to track patients’ health conditions remotely in real-time.",
    },
    {
      image: service2,
      title: "Holter Heart Surgery",
      description:
        "Advanced Holter heart monitoring and surgical support services designed to diagnose and treat cardiac conditions.",
    },
    {
      image: service3,
      title: "Diagnosis & Research",
      description:
        "We provide accurate diagnostic services and advanced medical research support for personalized treatment.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-sky-50 via-slate-50 to-teal-100">
      <div className="max-w-7xl mx-auto py-20 px-10 lg:px-0">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00A6FB] text-xl font-bold mb-4">Our Service</p>
          <h1 className="text-5xl font-bold">Our Medical Service</h1>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="rounded-xl p-4 shadow-md">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="w-full rounded-lg"
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                  />
                </motion.div>

                <h1 className="text-2xl font-bold mt-4">{service.title}</h1>

                <p className="text-gray-500 line-clamp-2 mt-2">
                  {service.description}
                </p>

                <Link
                  href="/"
                  className="flex items-center gap-1 text-[#00A6FB] mt-4"
                >
                  Read More
                  <motion.span whileHover={{ x: 5 }} className="mt-1">
                    <FaLongArrowAltRight />
                  </motion.span>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
