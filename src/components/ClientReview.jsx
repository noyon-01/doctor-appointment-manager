import { Avatar, Card } from "@heroui/react";
import { FaRegStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function ClientReview() {
  return (
    <div className="bg-gradient-to-r from-violet-50 via-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center">
          <p className="text-[#00A6FB] text-xl font-bold mb-4">Testimonials</p>
          <h1 className="text-5xl font-bold">What Our Client Says</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <Card className="px-6 py-12 shadow">
            <div className="flex items-center gap-1 text-[#FFC422]">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <p>
              "Booking an appointment was incredibly easy and fast. The doctor
              was professional, caring, and explained everything clearly!"
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center gap-4">
                <Avatar size="lg">
                  <Avatar.Image
                    alt="Large Avatar"
                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                  />
                  <Avatar.Fallback>LG</Avatar.Fallback>
                </Avatar>
                <div>
                  <p>Sarah Ahmed</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <div>
                <span className="text-5xl text-[#00A6FB]">
                  <FaQuoteRight />
                </span>
              </div>
            </div>
          </Card>
          <Card className="px-6 py-12 shadow">
            <div className="flex items-center gap-1 text-[#FFC422]">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <p>
              "Amazing experience! The platform is user-friendly, and I found
              the best doctor for my treatment within minutes. Very satisfied
              with the service."
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center gap-4">
                <Avatar size="lg">
                  <Avatar.Image
                    alt="Large Avatar"
                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                  />
                  <Avatar.Fallback>LG</Avatar.Fallback>
                </Avatar>
                <div>
                  <p>Noyon Hasan</p>
                  <p>Chattogram, Bangladesh</p>
                </div>
              </div>
              <div>
                <span className="text-5xl text-[#00A6FB]">
                  <FaQuoteRight />
                </span>
              </div>
            </div>
          </Card>
          <Card className="px-6 py-12 shadow">
            <div className="flex items-center gap-1 text-[#FFC422]">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <p>
              "Excellent service and smooth appointment process. The reminders
              helped me stay on track, and the doctor consultation was
              outstanding."
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center gap-4">
                <Avatar size="lg">
                  <Avatar.Image
                    alt="Large Avatar"
                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                  />
                  <Avatar.Fallback>LG</Avatar.Fallback>
                </Avatar>
                <div>
                  <p>Fatema Khan</p>
                  <p>Sylhet, Bangladesh</p>
                </div>
              </div>
              <div>
                <span className="text-5xl text-[#00A6FB]">
                  <FaQuoteRight />
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
