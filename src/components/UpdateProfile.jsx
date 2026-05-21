"use client";

import { authClient } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdatedProfile({ user }) {
  const router = useRouter();
  const UpdateUserInfo = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
      const res = await authClient.updateUser({
        name,
        image,
      });

      if (res?.data) {
        toast.success("Profile updated successfully!");

        router.push("/dashboard?tab=profile");
        router.refresh();
      }
    } catch (error) {
      toast.error("Update failed!");
      console.error(error);
    }
  };

  return (
    <Modal>
      <Button className="btn rounded-xl bg-[#00A6FB] text-white">
        <PencilToSquare /> Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="pl-6 text-xl font-bold flex items-center gap-1">
                <PencilToSquare /> Update Profile
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="px-6 pb-6 pt-4">
              <Surface variant="default">
                <form onSubmit={UpdateUserInfo} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    defaultValue={user.name}
                  >
                    <Label>Name</Label>
                    <Input placeholder="Name" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="image"
                    type="text"
                    defaultValue={user.image}
                  >
                    <Label>Photo URL</Label>
                    <Input placeholder="https://..." />
                  </TextField>

                  <Modal.Footer>
                    <Button
                      className="w-full bg-[#00A6FB] rounded-xl"
                      slot="close"
                      type="submit"
                    >
                      Save Change
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
