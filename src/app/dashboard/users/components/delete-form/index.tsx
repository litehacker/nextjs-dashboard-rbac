"use server";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Link from "next/link";

export const DeleteUserForm = ({
  action,
}: {
  action: string | ((formData: FormData) => void) | undefined;
}) => {
  return (
    <div className="flex flex-col p-4 items-center justify-center">
      <div className="flex flex-col items-center">
        <Trash className="h-8 w-8 m-8" />
        <h1 className="text-xl font-semibold mb-8">
          დახურვის შემთხვევაში, დაკარგავთ შევსებულ ინფორმაციას.ნამდვილად გსურთ
          დახურვა?
        </h1>
      </div>
      <form className="flex justify-between py-4 gap-[10px]" action={action}>
        <Link href="/dashboard/users" replace>
          <Button>არა</Button>
        </Link>
        <Button variant={"outline"} type="submit">
          დიახ
        </Button>
      </form>
    </div>
  );
};
