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
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
    });

    if (data) {
      toast.success("User is Successfully Signup Now!");
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
      return;
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

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
          <h1 className="text-2xl font-bold">Register</h1>
          <p className="text-[16px] text-gray-500 mt-1 mb-4">
            Create your DocAppoint account
          </p>
        </div>
        <FieldGroup>
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" className="w-full rounded-xl"/>
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" className="w-full rounded-xl"/>
            <FieldError />
          </TextField>
          <TextField name="image" type="url">
            <Label>Photo URL (Optional)</Label>
            <Input placeholder="https://..." className="w-full rounded-xl"/>
            <FieldError />
          </TextField>
          <TextField isRequired name="password" type="text">
            <Label>Password</Label>
            <Input placeholder="password" className="w-full rounded-xl"/>
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button
            type="submit"
            className="w-full bg-[#00A6FB] rounded-xl text-white font-semibold"
          >
            Register
          </Button>
        </Fieldset.Actions>
      </Fieldset>

      <div className="divider">OR</div>

      <Button
        onClick={handleGoogleSignIn}
        variant="outline"
        className="w-full border border-[#00A6FB] rounded-xl font-semibold"
      >
        <FcGoogle /> Continue with Google
      </Button>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link href={"/login"} className="text-[#00A6FB]">
          {" "}
          Login
        </Link>
      </p>
    </Form>
  );
}
