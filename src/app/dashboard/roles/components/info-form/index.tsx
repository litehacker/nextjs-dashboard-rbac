"use server";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { AccordionInputs } from "../accordions";
import { X } from "lucide-react";

export default async function InfoRoleForm() {
  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3 items-center">
          <Link href="/dashboard/roles" replace>
            <Button className="p-0" variant="ghost">
              <X />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">როლის დეტალები</h1>
        </div>
      </div>
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        <div>
          <Label htmlFor="role-name" className="block text-sm font-medium">
            როლის სახელწოდება <span className="text-red-600">*</span>
          </Label>
          <Input
            id="role-name"
            placeholder="მაგალითად: ადმინი"
            className="mt-1"
            disabled
          />
        </div>
        <div>
          <Label
            htmlFor="role-description"
            className="block text-sm font-medium"
          >
            როლის აღწერა
          </Label>
          <Input
            id="role-description"
            placeholder="მიუთითეთ როლის აღწერა"
            className="mt-1"
            disabled
          />
        </div>
        <AccordionInputs disabled />
      </div>
    </div>
  );
}
