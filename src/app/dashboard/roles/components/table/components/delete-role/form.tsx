"use server";
import { Button } from "@/components/ui/button";
import { CircleAlertIcon, UsersIcon, X, XIcon } from "lucide-react";
import Link from "next/link";
export const DeleteRoleDialogForm = ({
  action,
}: {
  action: string | ((formData: FormData) => void) | undefined;
}) => {
  return (
    <form className="flex flex-col gap-[18px] p-4" action={action}>
      <div className="flex relative w-full items-center justify-between">
        <h1 className="flex justify-center ">როლის წაშლა</h1>
        <Link href="/dashboard/roles" replace>
          <Button className="p-0" variant="ghost">
            <X />
          </Button>
        </Link>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 p-[10px] bg-[#F8F2F1] rounded-md">
          <CircleAlertIcon className="h-5 w-5 text-red-700" />
          <p className="text-sm text-red-700">
            დარწმუნებული ხართ რომ გსურთ მითითებული როლის წაშლა?
          </p>
        </div>
        <div className="flex justify-between border rounded-md p-3">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">ადმინისტრატორი</h3>
            <p className="text-sm text-muted-foreground">
              მართვის სრული უფლება, მართვის სრული უფლება
            </p>
          </div>
          <div className="flex items-center justify-end gap-2 p-3">
            <UsersIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm">0</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-end">
        <Link href="/dashboard/roles">
          <Button>გაუქმება</Button>
        </Link>
        <Button variant="outline" type="submit">
          წაშლა
        </Button>
      </div>
    </form>
  );
};
