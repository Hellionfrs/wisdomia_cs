import { useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "./ui/input";

type PasswordInputProps = {
    name?: "password" | "confirmPassword";
};

export default function PasswordInput({ name }: PasswordInputProps) {   
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <>
      <Label htmlFor="password">Password</Label>
      <div className="relative">
        <Input
          id={name}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={name === "password" ? "Enter your password" : "Confirm your password"}   
        />
        <Button
          variant={"ghost"}
          type="button"
          size={"icon"}
          className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 bg-inherit hover:text-gray-600 hover:bg-inherit"
          onClick={toggleShowPassword}
        >
          {showPassword ? <EyeIcon className="w-5 h-5" /> : <EyeOffIcon className="w-5 h-5" />}
        </Button>
      </div>
    </>
  );
}
