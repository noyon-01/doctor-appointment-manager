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
import { GiHealthNormal } from "react-icons/gi";
import { toast } from "react-toastify";

export function BookingModal({ doctor }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const bookingData = {
      userEmail: user?.email,
      doctorName: doctor.name,
      patientName: data.name,
      gender: data.gender,
      phone: data.phone,
      appointmentDate: data.date,
      appointmentTime: data.time,
      reason: data.reason,
    };

    const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(bookingData)
    })

    if(res){
        toast.success("User Successfully Booking Now!")
    }

    // const result = await res.json()
    // console.log(result);
  };

  return (
    <Modal>
      <Button
        className="btn bg-[#00A6FB] text-white rounded-xl mt-4"
        variant="secondary"
      >
        Book Appointment
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="pl-6 text-xl font-bold text-center">
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
                    <Input readOnly className="bg-[#00A6FB]/10" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                    defaultValue={doctor?.name}
                  >
                    <Label>Doctor Name</Label>
                    <Input readOnly className="bg-[#00A6FB]/10" />
                  </TextField>

                  <TextField
                    isRequired
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label>Patient Name</Label>
                    <Input placeholder="Full Name" />
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
                          <ListBox.Item id="florida" textValue="Florida">
                            Male
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="delaware" textValue="Delaware">
                            Female
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="california" textValue="California">
                            Others
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <TextField
                      className="w-[170px]"
                      name="phone"
                      type="tel"
                      isRequired
                    >
                      <Label>Phone</Label>
                      <Input placeholder="Phone number" />
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

                  <TextField className="w-full" name="reason">
                    <Label>Reason</Label>
                    <Input placeholder="Enter your problem" />
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
