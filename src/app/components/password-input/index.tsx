"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="password">პაროლი</Label>
        <Input
          id="password"
          name="password"
          type={!showPassword ? "password" : "text"}
          placeholder="პაროლი"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="show-password"
          onCheckedChange={(state: boolean) => {
            setShowPassword(state);
          }}
        />
        <Label htmlFor="show-password">მაჩვენე პაროლი</Label>
      </div>
    </>
  );
};
