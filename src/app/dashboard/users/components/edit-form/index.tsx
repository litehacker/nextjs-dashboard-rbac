"use server";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { UserForm } from "../user-form";

export const EditUserForm = ({
  action,
}: {
  action: (formData: FormData) => Promise<never>;
}) => {
  return (
    <div className="w-full flex justify-center bg-white">
      <form className="flex flex-col w-full" action={action}>
        <h1 className="p-4 flex justify-center border-b border-[#C9D0E1]">
          მომხმარებლის რედაქტირება
        </h1>
        <UserForm />
        <div className="flex justify-end p-4 border-t border-[#C9D0E1] gap-3">
          <Link href="/dashboard/users" replace>
            <Button variant="ghost">გაუქმება</Button>
          </Link>
          <Button type="submit">შენახვა</Button>
        </div>
      </form>
    </div>
  );
};
