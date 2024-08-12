"use server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Pencil, Trash } from "lucide-react";
import Link from "next/link";

export const FolderDropdown = ({ id }: { id: number }) => {
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
          <Link href={`/dashboard/bookmarks/edit/${id}?modal=true`} replace>
            <div className="flex gap-3 w-full">
              <Pencil color={"#323232"} />
              <span className="text-[#474747]">ჩანართის რედაქტირება</span>
            </div>
          </Link>
        </DropdownMenuItem>
        <Link href="/dashboard/bookmarks/delete/1?modal=true" replace>
          <DropdownMenuItem className="px-4 py-3">
            <Link href={`/dashboard/bookmarks/delete/${id}?modal=true`}>
              <div className="flex gap-3 text-[#7A0000] w-full">
                <Trash />
                <span>ჩანართის წაშლა</span>
              </div>
            </Link>
          </DropdownMenuItem>{" "}
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
