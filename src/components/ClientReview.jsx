"use client";

import { motion } from "framer-motion";
import { Avatar, Card } from "@heroui/react";
import { FaRegStar, FaQuoteRight } from "react-icons/fa";

export default function ClientReview() {
  const reviews = [
    {
      name: "Sarah Ahmed",
      location: "Dhaka, Bangladesh",
      text: "Booking an appointment was incredibly easy and fast. The doctor was professional, caring, and explained everything clearly!",
    },
    {
      name: "Noyon Hasan",
      location: "Chattogram, Bangladesh",
      text: "Amazing experience! The platform is user-friendly, and I found the best doctor for my treatment within minutes. Very satisfied with the service.",
    },
    {
      name: "Fatema Khan",
      location: "Sylhet, Bangladesh",
      text: "Excellent service and smooth appointment process. The reminders helped me stay on track, and the doctor consultation was outstanding.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-violet-50 via-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto py-20 px-10 lg:px-0">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00A6FB] text-xl font-bold mb-4">Testimonials</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            What Our Client Says
          </h1>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
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
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="px-6 py-12 shadow">
                <div className="flex items-center gap-1 text-[#FFC422]">
                  {[...Array(5)].map((_, i) => (
                    <FaRegStar key={i} />
                  ))}
                </div>

                <p className="my-4 text-gray-600">"{review.text}"</p>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <Avatar.Image
                        alt={review.name}
                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                      />
                      <Avatar.Fallback>{review.name[0]}</Avatar.Fallback>
                    </Avatar>

                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>

                  <span className="text-5xl text-[#00A6FB]">
                    <FaQuoteRight />
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
