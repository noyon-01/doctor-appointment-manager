"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  ListBox,
  Select,
  DateField,
  TimeField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { GiHealthNormal } from "react-icons/gi";

export function BookingModal({ doctor }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user)

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const bookingData = {
      userId: user?.id,
      userEmail: user?.email,
      doctorName: doctor.name,
      patientName: data.name,
      gender: data.gender,
      phone: data.phone,
      appointmentDate: data.date,
      appointmentTime: new Date(`1970-01-01T${data.time}`).toLocaleTimeString(
        "en-BD",
        {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        },
      ),
      reason: data.reason,
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    if (res) {
      toast.success("User Successfully Booking Now!");
    }
  };

  return (
    <Modal>
      <Button
        className="btn bg-[#00A6FB] text-white rounded-xl mt-4 w-full"
        variant="secondary"
      >
        Book Appointment
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-xl font-bold text-center">
                <div className="text-4xl text-[#00A6FB] flex justify-center mb-2">
                  <GiHealthNormal />
                </div>
                Book Appointment
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="px-6 pb-6 pt-4">
              <Surface variant="default">
                <form
                  onSubmit={handleBookAppointment}
                  className="flex flex-col gap-4"
                >
                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                    defaultValue={user?.email}
                  >
                    <Label>User Email</Label>
                    <Input
                      readOnly
                      className="bg-[#00A6FB]/10 w-full rounded-xl"
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="doctorName"
                    type="text"
                    variant="secondary"
                    defaultValue={doctor?.name}
                  >
                    <Label>Doctor Name</Label>
                    <Input
                      readOnly
                      className="bg-[#00A6FB]/10 w-full rounded-xl"
                    />
                  </TextField>

                  <TextField
                    isRequired
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label>Patient Name</Label>
                    <Input
                      placeholder="Full Name"
                      className="w-full rounded-xl"
                    />
                  </TextField>

                  <div className="flex justify-between items-center gap-4">
                    <Select
                      name="gender"
                      isRequired
                      className="w-full"
                      placeholder="Select one"
                    >
                      <Label>Gender</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Male" textValue="Male">
                            Male
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Female" textValue="Female">
                            Female
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Others" textValue="Others">
                            Others
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <TextField
                      isRequired
                      className="w-full"
                      name="phone"
                      type="tel"
                    >
                      <Label>Phone</Label>
                      <Input
                        placeholder="Phone"
                        className="w-full rounded-xl"
                      />
                    </TextField>
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <DateField isRequired className="w-full" name="date">
                      <Label>Date</Label>
                      <DateField.Group>
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                      </DateField.Group>
                    </DateField>

                    <TimeField isRequired className="w-full" name="time">
                      <Label>Time</Label>
                      <TimeField.Group>
                        <TimeField.Input>
                          {(segment) => <TimeField.Segment segment={segment} />}
                        </TimeField.Input>
                      </TimeField.Group>
                    </TimeField>
                  </div>

                  <TextField name="reason">
                    <Label>Reason</Label>
                    <Input
                      placeholder="Enter your problem"
                      className="w-full rounded-xl"
                    />
                  </TextField>

                  <Modal.Footer>
                    <Button
                      className="w-full bg-[#00A6FB] rounded-xl"
                      slot="close"
                      type="submit"
                    >
                      Confirm Booking
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
