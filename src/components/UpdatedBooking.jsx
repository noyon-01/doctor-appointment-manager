"use client";

import { authClient } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import {
  Button,
  DateField,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  TimeField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export function UpdatedBooking({ bookingData }) {
  const router = useRouter();

  const handleUpdateBookAppointment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = Object.fromEntries(formData.entries());

    const updateBooking = {
      patientName: result.name,
      phone: result.phone,
      appointmentDate: result.date,
      appointmentTime: new Date(`1970-01-01T${result.time}`).toLocaleTimeString(
        "en-BD",
        {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        },
      ),
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/booking/${bookingData?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updateBooking),
      },
    );
    const data = await res.json();
    if (data?.modifiedCount > 0) {
      toast.success("Appointment updated successfully");
      router.refresh();
    }
  };

  return (
    <Modal>
      <Button className="btn rounded-xl bg-[#00A6FB] text-white">
        <PencilToSquare /> Update
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="pl-6 text-xl font-bold flex gap-1 items-center">
                <PencilToSquare /> Update Booking Appointment
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="px-6 pb-6 pt-4">
              <Surface variant="default">
                <form
                  onSubmit={handleUpdateBookAppointment}
                  className="flex flex-col gap-4"
                >
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                    defaultValue={bookingData.doctorName}
                  >
                    <Label>Doctor Name</Label>
                    <Input readOnly className="bg-[#00A6FB]/10" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    defaultValue={bookingData.patientName}
                  >
                    <Label>Patient Name</Label>
                    <Input placeholder="Full Name" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="phone"
                    type="text"
                    defaultValue={bookingData.phone}
                  >
                    <Label>Phone</Label>
                    <Input placeholder="Phone" />
                  </TextField>

                  <div className="flex justify-between items-center gap-4">
                    <DateField className="w-full" name="date">
                      <Label>Date</Label>
                      <DateField.Group>
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                      </DateField.Group>
                    </DateField>

                    <TimeField className="w-full" name="time">
                      <Label>Time</Label>
                      <TimeField.Group>
                        <TimeField.Input>
                          {(segment) => <TimeField.Segment segment={segment} />}
                        </TimeField.Input>
                      </TimeField.Group>
                    </TimeField>
                  </div>

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
