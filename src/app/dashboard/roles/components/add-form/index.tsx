"use server";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Link from "next/link";
import { AccordionInputs } from "../accordions";

export default async function AddRoleForm({
  action,
}: {
  action: string | ((formData: FormData) => void) | undefined;
}) {
  return (
    <form className="w-full p-4" action={action}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3 items-center">
          <Link href="/dashboard/roles" replace>
            <Button className="p-0" variant="ghost">
              <X />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">როლის დამატება</h1>
        </div>
        <Button type="submit">შენახვა</Button>
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
            required
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
          />
        </div>
        <AccordionInputs />
      </div>
    </form>
  );
}
