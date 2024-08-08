"use server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Trash, User } from "lucide-react";
import Link from "next/link";

export const RowDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-transparent p-0 !ring-0 !ring-offset-0"
        >
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[248px]" side="left">
        <DropdownMenuItem className="px-4 py-3">
          <Link href="/dashboard/users/edit/1?modal=true" replace>
            <div className="flex gap-3 w-full">
              <User color={"#323232"} />
              <span className="text-[#474747]">პროფილის ნახვა</span>
            </div>
          </Link>
        </DropdownMenuItem>
        <Link href="/dashboard/users/delete/1?modal=true" replace>
          <DropdownMenuItem className="px-4 py-3">
            <Link href="/dashboard/bookmarks/delete/1?modal=true">
              <div className="flex gap-3 text-[#7A0000] w-full">
                <Trash />
                <span>მომხმარებლის გაუქმება</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
