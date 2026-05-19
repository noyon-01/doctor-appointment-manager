"use client";

import { FcGoogle } from "react-icons/fc";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { GiHealthNormal } from "react-icons/gi";

export default function RegisterPage() {
  const onSubmit = () => {};

  return (
    <Form
      onSubmit={onSubmit}
      className="w-full max-w-md mx-auto my-22 px-10 py-10 bg-white border-1 border-[#00A6FB]/10 shadow-[#00A6FB]/20 shadow-xl rounded-2xl"
    >
      <Fieldset>
        <div className="text-center">
          <div className="text-4xl text-[#00A6FB] flex justify-center mb-2">
            <GiHealthNormal />
          </div>
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-[16px] text-gray-500 mt-1 mb-4">
            Welcome back to DocAppoint
          </p>
        </div>
        <FieldGroup>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>
          <TextField isRequired name="name" type="text">
            <Label>Password</Label>
            <Input placeholder="password" />
            <FieldError />
          </TextField>
          <p className="text-right text-gray-500">Forgot Password?</p>
        </FieldGroup>
        <Fieldset.Actions>
          <Button
            type="submit"
            className="w-full bg-[#00A6FB] rounded-xl text-white font-semibold"
          >
            Login
          </Button>
        </Fieldset.Actions>
      </Fieldset>

      <div className="divider">OR</div>

      <Button
        variant="outline"
        className="w-full border border-[#00A6FB] rounded-xl font-semibold"
      >
        <FcGoogle /> Continue with Google
      </Button>
      <p className="text-center mt-4">
        Don’t have an account?{" "}
        <Link href={"/register"} className="text-[#00A6FB]">
          {" "}
          Register
        </Link>
      </p>
    </Form>
  );
}
