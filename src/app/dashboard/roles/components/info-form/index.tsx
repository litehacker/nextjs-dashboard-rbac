"use server";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CircleCheckIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { AccordionInputs } from "../accordions";

const userPermissions: UserPermission[] = [
  {
    value: "create_user",
    title: "მომხმარებლის შექმნა",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერი",
  },
  {
    value: "edit_user",
    title: "მომხმარებლის რედაქტირება",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერის რედაქტირება",
  },
  {
    value: "delete_user",
    title: "მომხმარებლის წაშლა",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერის წაშლა",
  },
];
type UserPermission = {
  value: "create_user" | "edit_user" | "delete_user";
  title: string;
  description: string;
};

const bookmarkPermissions: BookmarkPermission[] = [
  {
    value: "create_record",
    title: "ჩანაწერის შექმნა",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერი",
  },
  {
    value: "edit_record",
    title: "ჩანაწერის რედაქტირება",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერის რედაქტირება",
  },
  {
    value: "delete_record",
    title: "ჩანაწერის წაშლა",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერის წაშლა",
  },
];

type BookmarkPermission = {
  value: "create_record" | "edit_record" | "delete_record";
  title: string;
  description: string;
};

export default async function InfoRoleForm() {
  const selectedBookmarkPermissions = ["create_record"];
  const selectedUserPermissions = ["create_user"];

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
