import Image from "next/image";
import receptionist from "@/assets/receptionist.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-teal-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-35">

        <div className="space-y-6">
          <p className="text-[#00A6FB] border-l-2 border-[#00A6FB] pl-3 text-xl font-bold">Welcome to DocAppoint</p>
          <h1 className="text-7xl font-bold">We Are Committed <br />To Your Health</h1>
          <p className="text-[16px] text-gray-500">It is a established fact that a reader will be distracted by the <br /> content of a page when looking at this layout.</p>
          <div className="flex items-center gap-2 mt-10">
            <Link href={"/appointment"}><button className="btn bg-[#00A6FB] text-white text-[16px]">Browse Dcotors</button></Link>
            <Link href={"/dashboard"}><button className="btn border-[#00A6FB] hover:bg-[#00A6FB] hover:text-white text-black text-[16px]">My Bookings</button></Link> 
          </div>
        </div>

        <div>
          <Image src={receptionist} alt="doctor" width={600} height={600} />
        </div>

      </div>
    </section>
  );
}
