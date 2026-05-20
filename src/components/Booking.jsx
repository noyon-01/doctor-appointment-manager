import { Card } from "@heroui/react";

export default function BookingPage({data}) {
  return (
      <Card className="rounded-xl">
      <h2 className="text-2xl font-bold mb-3">Booking Info</h2>
      <p>{data.doctorName}</p>
      <p>Date: 25 May 2026</p>
      <p>Time: 7:00 PM</p>
    </Card>
  );
}
