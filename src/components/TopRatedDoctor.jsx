import AnimatedDoctorSection from "./AnimatedDoctorSection";

export default async function TopRatedDoctors() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/doctors`);
  const doctors = await res.json();

  const topRatedDoctors = [...doctors]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return <AnimatedDoctorSection doctors={topRatedDoctors} />;
}
