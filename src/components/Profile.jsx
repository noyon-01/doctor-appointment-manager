import { Card } from "@heroui/react";

export default function ProfilePage({data}) {
  return (
    <Card className="rounded-xl">
      <h2 className="text-2xl font-bold mb-3">Profile Info</h2>
      <p>Name: Noyon</p>
      <p>Email: noyon@example.com</p>
      <p>Phone: 017xxxxxxxx</p>
    </Card>
  );
}
