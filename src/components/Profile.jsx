import { auth } from "@/lib/auth";
import { Avatar, Card } from "@heroui/react";
import { headers } from "next/headers";
import UpdatedProfile from "./UpdateProfile";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  return (
    <Card className="rounded-xl w-83 md:w-120 p-6 border-t-4 border-[#00A6FB]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-3">
        <Avatar size="lg" className="w-20 h-20 rounded-full">
          <Avatar.Image
            referrerPolicy="no-referrer"
            alt={user?.name.charAt(0)}
            src={user?.image}
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <p className="text-xl font-semibold text-gray-500">{user?.email}</p>
        </div>
      </div>

      <UpdatedProfile />
    </Card>
  );
}
