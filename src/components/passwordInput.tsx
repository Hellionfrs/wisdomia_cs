"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "./ui/input";

type PasswordInputProps = {
  name: "password" | "confirmPassword" | "oldPassword";
};

const configInput = {
  password: { input: "password", placeholder: "Enter your password" },
  confirmPassword: {
    input: "confirm password",
    placeholder: "Confirm your password",
  },
  oldPassword: {
    input: "old password",
    placeholder: "Enter your old password",
  },
};
export default function PasswordInput({ name }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);
  const { input, placeholder } = configInput[name];
  return (
    <>
      <Label htmlFor="password" className="capitalize">
        {input}
      </Label>
      <div className="relative">
        <Input
          id={name}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
        />
        <Button
          variant={"ghost"}
          type="button"
          size={"icon"}
          className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 bg-inherit hover:text-gray-600 hover:bg-inherit"
          onClick={toggleShowPassword}
        >
          {showPassword ? (
            <EyeIcon className="w-5 h-5" />
          ) : (
            <EyeOffIcon className="w-5 h-5" />
          )}
        </Button>
      </div>
    </>
  );
}
