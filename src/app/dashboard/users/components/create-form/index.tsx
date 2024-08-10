"use server";

import Link from "next/link";
import { UserForm } from "../user-form";
import { Button } from "@/components/ui/button";

export const CreateUserForm = ({
  action,
}: {
  action: string | ((formData: FormData) => void) | undefined;
}) => {
  return (
    <div className="w-full flex justify-center bg-white">
      <form className="flex flex-col w-full" action={action}>
        <h1 className="p-4 flex justify-center border-b border-[#C9D0E1]">
          მომხმარებლის დამატება
        </h1>
        <UserForm />
        <div className="flex justify-end p-4 border-t border-[#C9D0E1] gap-3">
          <Link href="/dashboard/users" replace>
            <Button variant="ghost">გაუქმება</Button>
          </Link>
          <Button type="submit">დამატება</Button>
        </div>
      </form>
    </div>
  );
};
